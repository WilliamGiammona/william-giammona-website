import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Contrast } from "lucide-react";

const Nav = () => {
  return (
    <nav className="font-sans flex justify-between w-full max-w-6xl mx-auto h-24 items-center px-5">
      <figure>
        <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
      </figure>
      <ul className="flex items-center">
        <li className="mx-3">
          <Link className="text-[#242424] font-bold" href="/">
            About
          </Link>
        </li>
        <li className="mx-3">
          <Link className="text-[#242424] font-bold" href="/projects">
            Projects
          </Link>
        </li>
        <li className="mx-3">
          <Link className="text-[#242424] font-bold" href="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Contrast className="text-xl" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
