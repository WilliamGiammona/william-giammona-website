import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { Github } from "lucide-react";

const Footer = () => {
  return (
    <section className="flex flex-col items-center">
      <figure>
        <Image src="/images/logo.png" alt="Logo" width={70} height={70} />
      </figure>
      <ul className="flex w-full justify-around max-w-lg text-white my-5">
        <li className="relative">
          <Link className="link-footer" href="/">
            Github
          </Link>
        </li>
        <li className="relative">
          <Link className="link-footer" href="/">
            LinkedIn
          </Link>
        </li>
        <li className="relative">
          <Link className="link-footer" href="/">
            Contact
          </Link>
        </li>
        <li className="relative">
          <Link className="link-footer" href="/">
            Resume
          </Link>
        </li>
      </ul>
      <div className="text-white">
        <span className="text-xs">&#9400;</span> Made By William Giammona
      </div>
    </section>
  );
};

export default Footer;
