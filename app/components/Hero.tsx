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
          <h3 className="text-2xl font-bold">Here's a bit about me.</h3>
          <h4 className="mt-3 mb-6">Frontend Software Engineer</h4>
          <p className="mb-2 leading-7">
            I'm an American{" "}
            <span className="text-orange">frontend software engineer</span> with
            a strong passion for developing websites with great{" "}
            <span className="text-orange">user experiences.</span>
            <br />I currently work on extremely difficult engineering problems
          </p>
          <div className="flex flex-wrap">
            <figure className="modal__language">
              <div className="relative w-full aspect-square">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
                  alt="html logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="language__name">HTML</span>
            </figure>

            <figure className="modal__language">
              <div className="relative w-full aspect-square">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
                  alt="CSS logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="language__name">CSS</span>
            </figure>

            <figure className="modal__language">
              <div className="relative w-full aspect-square">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg"
                  alt="TS logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="language__name">Typescript</span>
            </figure>

            <figure className="modal__language">
              <div className="relative w-full aspect-square">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg"
                  alt="React logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="language__name">React</span>
            </figure>

            <figure className="modal__language">
              <div className="relative w-full aspect-square">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                  alt="Next.js logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="language__name">Next.js</span>
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
