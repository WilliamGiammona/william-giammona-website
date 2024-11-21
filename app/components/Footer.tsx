import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <>
      <figure>
        <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
      </figure>
      <ul>
        <li>
          <Link href="/">Github</Link>
        </li>
        <li>
          <Link href="/">LinkedIn</Link>
        </li>
        <li>
          <Link href="/">Email</Link>
        </li>
        <li>
          <Link href="/">Resume</Link>
        </li>
      </ul>
    </>
  );
};

export default Footer;
