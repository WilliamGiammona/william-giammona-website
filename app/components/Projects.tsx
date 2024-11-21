import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Link2 } from "lucide-react";

const Projects = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-3">
      <h1 className="text-center text-5xl mb-16">
        <b>
          Here are some of my <span className="text-orange">projects</span>
        </b>
      </h1>
      <ul>
        <li>
          <figure className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="/images/stockphoto.png"
              alt="stockphoto"
              className="w-full transition-all duration-300 ease-in-out group-hover:blur-sm group-hover:scale-108"
              width={1600}
              height={1600}
            />
            <div
              className="
                absolute 
                top-0 
                left-0 
                w-full 
                h-full 
              bg-photobg 
                opacity-0 
                group-hover:opacity-70 
                transition-opacity 
                duration-300
                ease-in-out
                "
            >
              <div
                className="
                    absolute 
                    top-1/2 
                    left-24 
                  text-white 
                    text-center 
                    max-w-xl 
                    translate-y-full 
                    group-hover:translate-y-[-50%] 
                    transition-transform 
                    duration-500
                    ease-in-out
                     "
              >
                <figcaption className="text-left text-4xl">
                  <b>Car Sales Project</b>
                </figcaption>
                <h4 className="text-left mt-2">
                  <b>NEXT.JS TYPESCRIPT TAILWINDCSS</b>
                </h4>
                <p className="max-w-lg text-left my-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio necessitatibus, tempora nobis quo vero incidunt aut
                  ullam sequi similique sunt, iure, error voluptate facere in.
                  Hic ipsum libero commodi ipsa.
                </p>
                <div className="flex gap-4 justify-start">
                  <Link className="text-white" href="/projects">
                    <Github size={20} />
                  </Link>
                  <Link className="text-white" href="/projects">
                    <Link2 size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </figure>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
