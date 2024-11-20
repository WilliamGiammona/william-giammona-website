import React from "react";
import { Mail } from "lucide-react";

const Mailbtn = () => {
  return (
    <div>
      <Mail
        className="text-black rounded-lg cursor-pointer absolute bottom-8 right-10 "
        size={70}
      />
    </div>
  );
};

export default Mailbtn;
