import React from "react";
import { Mail } from "lucide-react";

const Mailbtn = () => {
  return (
    <div>
      <Mail
        className="text-mail rounded-lg cursor-pointer absolute bottom-4 right-4 "
        size={70}
      />
    </div>
  );
};

export default Mailbtn;
