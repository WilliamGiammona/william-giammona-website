import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Contrast } from "lucide-react";
import { useModal } from "./ModalContext";

const Nav = () => {
  const { setIsFormVisible } = useModal();
  return (
    <nav className="font-sans flex justify-between w-full max-w-6xl mx-auto h-24 items-center px-5">
      <figure>
        <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
      </figure>
      <ul className="flex items-center">
        <li className="mx-3 relative">
          <Link className="text-[#242424] font-bold link-underline" href="/">
            About
          </Link>
        </li>
        <li className="mx-3 relative">
          <Link
            className="text-[#242424] font-bold link-underline"
            href="/projects"
          >
            Projects
          </Link>
        </li>
        <li className="mx-3 relative">
          <Link
            onClick={() => setIsFormVisible(true)}
            className="text-[#242424] font-bold link-underline"
            href="/contact"
          >
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
