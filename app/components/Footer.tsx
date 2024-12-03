import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { Github } from "lucide-react";

const Footer = () => {
  return (
    <section className="flex flex-col items-center">
      <figure>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={70}
          height={70}
          className="dark:invert" // Add invert in dark mode if your logo is dark
        />
      </figure>
      <ul className="flex w-full justify-around max-w-lg text-primary my-5">
        <li className="relative">
          <Link className="link-footer relative" href="/">
            Github
          </Link>
        </li>
        <li className="relative">
          <Link className="link-footer relative" href="/">
            LinkedIn
          </Link>
        </li>
        <li className="relative">
          <Link className="link-footer relative" href="/">
            Contact
          </Link>
        </li>
        <li className="relative">
          <Link className="link-footer relative" href="/">
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
