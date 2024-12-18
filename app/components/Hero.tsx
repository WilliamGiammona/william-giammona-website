"use client";

import React from "react";
import { Linkedin, Github, FileText } from "lucide-react";
import Link from "next/link";
import { useModal } from "./ModalContext";

const Hero = () => {
  const { setIsFormVisible } = useModal();

  return (
    <header className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold w-full max-w-5xl px-8 md:pl-32 lg:pl-32 xl:px-4">
      <h1 className="text-5xl md:text-8xl mb-2 md:mb-3 text-left text-foreground">
        Hey
      </h1>
      <h1 className="text-orange text-5xl md:text-8xl mb-2 md:mb-3 text-left">
        I&apos;m William.
      </h1>
      <p className="text-xl max-w-96 leading-[1.8] md:leading-[2] text-foreground">
        I&apos;m a <b className="text-orange">Frontend Software Engineer </b>
        with a strong passion for building web applications with great user
        experiences.
        <br />
        Here&apos;s a bit more{" "}
        <button
          onClick={() => setIsFormVisible(true)}
          className="text-orange relative"
        >
          <span className="about-underline">about me.</span>
        </button>
      </p>
      <div className="flex mt-4 gap-3">
        <Link
          href="https://www.linkedin.com/in/william-giammona-933376339/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Linkedin
            className="bg-orange text-white p-2 rounded-lg transition-all duration-300 ease-in-out hover:scale-110"
            size={32}
          />
        </Link>
        <Link
          href="https://github.com/WilliamGiammona"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Github
            className="bg-orange text-white p-2 rounded-lg transition-all duration-300 ease-in-out hover:scale-110"
            size={32}
          />
        </Link>
        <Link
          href="https://william-giammona-resume.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <FileText
            className="bg-orange text-white p-2 rounded-lg transition-all duration-300 ease-in-out hover:scale-110"
            size={32}
          />
        </Link>
      </div>
    </header>
  );
};

export default Hero;
