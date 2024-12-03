"use client";
import { createContext, useContext, useState } from "react";

type ModalContextType = {
  isFormVisible: boolean;
  setIsFormVisible: (value: boolean) => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  return (
    <ModalContext.Provider value={{ isFormVisible, setIsFormVisible }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within ModalProvider");
  return context;
};
