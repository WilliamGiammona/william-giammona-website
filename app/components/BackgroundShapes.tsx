"use client";

import React from "react";
import Image from "next/image";

const BackgroundShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Top Left */}
      <div className="absolute top-10 left-10 animate-[spin_20s_linear_infinite]">
        <Image
          src="/images/backgroundImages/squiggly.svg"
          alt="background shape"
          width={40}
          height={40}
          className="opacity-20"
        />
      </div>

      {/* Top Center */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 animate-[spin_25s_linear_infinite]">
        <Image
          src="/images/backgroundImages/circle.svg"
          alt="background shape"
          width={30}
          height={30}
          className="opacity-20"
        />
      </div>

      {/* Top Right */}
      <div className="absolute top-10 right-10 animate-[spin_22s_linear_infinite]">
        <Image
          src="/images/backgroundImages/semi-circle.svg"
          alt="background shape"
          width={40}
          height={40}
          className="opacity-20"
        />
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-10 left-10 animate-[spin_28s_linear_infinite]">
        <Image
          src="/images/backgroundImages/triangle.svg"
          alt="background shape"
          width={40}
          height={40}
          className="opacity-20"
        />
      </div>

      {/* Bottom Center */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-[spin_24s_linear_infinite]">
        <Image
          src="/images/backgroundImages/circle.svg"
          alt="background shape"
          width={30}
          height={30}
          className="opacity-20"
        />
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-10 right-10 animate-[spin_26s_linear_infinite]">
        <Image
          src="/images/backgroundImages/squiggly.svg"
          alt="background shape"
          width={40}
          height={40}
          className="opacity-20"
        />
      </div>
    </div>
  );
};

export default BackgroundShapes;
