"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const SCALE_FACTOR = 1 / 20;

const BackgroundShapes = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isXlScreen, setIsXlScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsXlScreen(window.innerWidth >= 1280); // xl breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isXlScreen) {
        const x = event.clientX * SCALE_FACTOR;
        const y = event.clientY * SCALE_FACTOR;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isXlScreen]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1] hidden md:block">
      {/* Top Row */}
      <div
        className={`absolute top-32 left-32 transition-transform duration-300 ease-out ${
          !isXlScreen && "animate-float1"
        }`}
        style={
          isXlScreen
            ? {
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              }
            : undefined
        }
      >
        <Image
          src="/images/backgroundImages/semi-circle.svg"
          alt="background shape"
          width={18}
          height={18}
        />
      </div>

      <div
        className={`absolute top-32 left-1/2 -translate-x-1/2 transition-transform duration-300 ease-out ${
          !isXlScreen && "animate-float2"
        }`}
        style={
          isXlScreen
            ? {
                transform: `translate(${-mousePosition.x}px, ${
                  mousePosition.y
                }px)`,
              }
            : undefined
        }
      >
        <Image
          src="/images/backgroundImages/circle.svg"
          alt="background shape"
          width={15}
          height={15}
        />
      </div>

      <div
        className={`absolute top-32 right-32 transition-transform duration-300 ease-out ${
          !isXlScreen && "animate-float3"
        }`}
        style={
          isXlScreen
            ? {
                transform: `translate(${
                  mousePosition.x
                }px, ${-mousePosition.y}px)`,
              }
            : undefined
        }
      >
        <Image
          src="/images/backgroundImages/squiggly.svg"
          alt="background shape"
          width={18}
          height={18}
        />
      </div>

      {/* Middle Row */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 left-32 transition-transform duration-300 ease-out ${
          !isXlScreen && "animate-float4"
        }`}
        style={
          isXlScreen
            ? {
                transform: `translate(${-mousePosition.x}px, ${
                  mousePosition.y
                }px)`,
              }
            : undefined
        }
      >
        <Image
          src="/images/backgroundImages/semi-circle.svg"
          alt="background shape"
          width={18}
          height={18}
        />
      </div>

      <div
        className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-transform duration-300 ease-out ${
          !isXlScreen && "animate-float5"
        }`}
        style={
          isXlScreen
            ? {
                transform: `translate(${
                  mousePosition.x
                }px, ${-mousePosition.y}px)`,
              }
            : undefined
        }
      >
        <Image
          src="/images/backgroundImages/triangle.svg"
          alt="background shape"
          width={15}
          height={15}
        />
      </div>

      <div
        className={`absolute top-1/2 -translate-y-1/2 right-32 transition-transform duration-300 ease-out ${
          !isXlScreen && "animate-float6"
        }`}
        style={
          isXlScreen
            ? {
                transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
              }
            : undefined
        }
      >
        <Image
          src="/images/backgroundImages/circle.svg"
          alt="background shape"
          width={18}
          height={18}
        />
      </div>

      {/* Bottom Row */}
      <div
        className={`absolute bottom-32 left-32 transition-transform duration-300 ease-out ${
          !isXlScreen && "animate-float7"
        }`}
        style={
          isXlScreen
            ? {
                transform: `translate(${
                  mousePosition.x
                }px, ${-mousePosition.y}px)`,
              }
            : undefined
        }
      >
        <Image
          src="/images/backgroundImages/squiggly.svg"
          alt="background shape"
          width={15}
          height={15}
        />
      </div>

      <div
        className={`absolute bottom-32 left-1/2 -translate-x-1/2 transition-transform duration-300 ease-out ${
          !isXlScreen && "animate-float8"
        }`}
        style={
          isXlScreen
            ? {
                transform: `translate(${-mousePosition.x}px, ${
                  mousePosition.y
                }px)`,
              }
            : undefined
        }
      >
        <Image
          src="/images/backgroundImages/circle.svg"
          alt="background shape"
          width={18}
          height={18}
        />
      </div>

      <div
        className={`absolute bottom-32 right-32 transition-transform duration-300 ease-out ${
          !isXlScreen && "animate-float9"
        }`}
        style={
          isXlScreen
            ? {
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              }
            : undefined
        }
      >
        <Image
          src="/images/backgroundImages/semi-circle.svg"
          alt="background shape"
          width={18}
          height={18}
        />
      </div>
    </div>
  );
};

export default BackgroundShapes;
