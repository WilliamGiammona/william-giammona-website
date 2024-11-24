import React from "react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <header className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold w-full max-w-5xl px-8">
      <h1 className="text-8xl mb-3 text-left">Hey</h1>
      <h1 className="text-orange text-8xl mb-3 text-left">I&apos;m William.</h1>
      <p className="text-xl max-w-96 leading-[2]">
        I&apos;m a <b className="text-orange">Frontend Software Engineer </b>
        with a strong passion for building web applications with great user
        experiences.
        <br />
        Here&apos;s a bit more <b className="text-orange">about me.</b>
      </p>
      <div className="flex mt-4 gap-3">
        <Link
          href="https://www.linkedin.com/in/william-giammona-933376339/"
          target="_blank"
          rel="noopener noreferrer"
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
        >
          <Github
            className="bg-orange text-white p-2 rounded-lg transition-all duration-300 ease-in-out hover:scale-110"
            size={32}
          />
        </Link>
        <Link href="/" target="_blank" rel="noopener noreferrer">
          <FileText
            className="bg-orange text-white p-2 rounded-lg transition-all duration-300 ease-in-out hover:scale-110"
            size={32}
          />
        </Link>
      </div>
      <div className="modal">
        <div className="w-1/2 bg-background flex flex-col justify-center py-10 px-20">
          <h3>Here's a bit about me.</h3>
          <h4></h4>
          <p>
            I'm an American frontend software engineer with a strong passion for
            developing websites with great user experiences.
          </p>
          <br />
          <p>I currently work on extremely difficult engineering problems</p>
          <div className="flex flex-wrap">
            <figure className="modal__language">
              <Image
                src="/images/HTML.svg.png"
                height={64}
                width={64}
                alt="html logo"
              />
            </figure>
            <figure className="modal__language">
              <Image
                src="/images/CSS.svg.png"
                height={64}
                width={64}
                alt="CSS logo"
              />
            </figure>
            <figure className="modal__language">
              <Image
                src="/images/TS.svg.png"
                height={64}
                width={64}
                alt="TS logo"
              />
            </figure>
            <figure className="modal__language">
              <Image
                src="/images/React.svg.png"
                height={64}
                width={64}
                alt="Next logo"
              />
            </figure>
            <figure className="modal__language">
              <Image
                src="/images/Next.png"
                height={64}
                width={64}
                alt="Next logo"
              />
            </figure>
          </div>
        </div>
        <div className="w-1/2 bg-black text-white py-10 px-20">
          Let's have a chat
        </div>
      </div>
    </header>
  );
};

export default Hero;
