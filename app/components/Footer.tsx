import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <section className="flex flex-col items-center">
      <figure>
        <Image src="/images/logo.png" alt="Logo" width={70} height={70} />
      </figure>
      <ul>
        <li>
          <Link href="/">Github</Link>
        </li>
        <li>
          <Link href="/">LinkedIn</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
        <li>
          <Link href="/">Resume</Link>
        </li>
      </ul>
      <div>
        <span className="text-xs">&#9400;</span> Made By William Giammona
      </div>
    </section>
  );
};

export default Footer;
