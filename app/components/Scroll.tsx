import React from "react";

const Scroll = () => {
  return (
    <div
      className="
  w-5 
  h-8
  border-2 
  border-solid 
  border-black
  rounded-3xl
  flex 
  items-center 
  justify-center
  absolute 
  bottom-5 
  left-1/2 
  -translate-x-1/2
  after:content-[''] 
  after:absolute 
  after:w-1
  after:h-1 
  after:bg-black
  after:rounded-sm
  after:animate-scroll
  transition-all 
  duration-300 
  ease-in-out 
  hover:scale-110
  cursor-pointer
"
    ></div>
  );
};

export default Scroll;
