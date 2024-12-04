"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const BackgroundShapes = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const scaleFactor = 1 / 20;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX * scaleFactor;
      const y = event.clientY * scaleFactor;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {/* Top Row */}
      <div
        className="absolute top-32 left-32 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        <Image
          src="/images/backgroundImages/semi-circle.svg"
          alt="background shape"
          width={18}
          height={18}
          className="dark:invert"
        />
      </div>

      <div
        className="absolute top-32 left-1/2 -translate-x-1/2 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${-mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        <Image
          src="/images/backgroundImages/circle.svg"
          alt="background shape"
          width={15}
          height={15}
          className="dark:invert"
        />
      </div>

      <div
        className="absolute top-32 right-32 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x}px, ${-mousePosition.y}px)`,
        }}
      >
        <Image
          src="/images/backgroundImages/squiggly.svg"
          alt="background shape"
          width={18}
          height={18}
          className="dark:invert"
        />
      </div>

      {/* Middle Row */}
      <div
        className="absolute top-1/2 -translate-y-1/2 left-32 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${-mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        <Image
          src="/images/backgroundImages/circle.svg"
          alt="background shape"
          width={18}
          height={18}
          className="dark:invert"
        />
      </div>

      <div
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x}px, ${-mousePosition.y}px)`,
        }}
      >
        <Image
          src="/images/backgroundImages/triangle.svg"
          alt="background shape"
          width={15}
          height={15}
          className="dark:invert"
        />
      </div>

      <div
        className="absolute top-1/2 -translate-y-1/2 right-32 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
        }}
      >
        <Image
          src="/images/backgroundImages/circle.svg"
          alt="background shape"
          width={18}
          height={18}
          className="dark:invert"
        />
      </div>

      {/* Bottom Row */}
      <div
        className="absolute bottom-32 left-32 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x}px, ${-mousePosition.y}px)`,
        }}
      >
        <Image
          src="/images/backgroundImages/squiggly.svg"
          alt="background shape"
          width={15}
          height={15}
          className="dark:invert"
        />
      </div>

      <div
        className="absolute bottom-32 left-1/2 -translate-x-1/2 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${-mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        <Image
          src="/images/backgroundImages/circle.svg"
          alt="background shape"
          width={18}
          height={18}
          className="dark:invert"
        />
      </div>

      <div
        className="absolute bottom-32 right-32 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        <Image
          src="/images/backgroundImages/semi-circle.svg"
          alt="background shape"
          width={18}
          height={18}
          className="dark:invert"
        />
      </div>
    </div>
  );
};

export default BackgroundShapes;
