"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useModal } from "./ModalContext";

const Footer = () => {
  const { setIsFormVisible } = useModal();

  return (
    <section className="flex flex-col items-center">
      <figure>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={70}
          height={70}
          className="dark:invert"
        />
      </figure>
      <ul className="flex w-full justify-around max-w-lg text-primary my-5">
        <li className="relative">
          <Link
            className="link-footer relative"
            href="https://github.com/WilliamGiammona"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
        </li>
        <li className="relative">
          <Link
            className="link-footer relative"
            href="https://www.linkedin.com/in/william-giammona-933376339/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </li>
        <li className="relative">
          <Link
            className="link-footer relative"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsFormVisible(true);
            }}
          >
            Contact
          </Link>
        </li>
        <li className="relative">
          <Link
            className="link-footer relative"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Link>
        </li>
      </ul>
      <div className="text-primary">
        <span className="text-xs">&#9400;</span> Made By William Giammona
      </div>
    </section>
  );
};

export default Footer;
