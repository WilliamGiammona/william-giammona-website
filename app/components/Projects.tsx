import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Link2 } from "lucide-react";

const Projects = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-6 md:px-12 xl:px-3 z-10">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-16 text-foreground">
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
            <div className="absolute top-0 left-0 w-full h-full bg-primary/80 dark:bg-primary/90 opacity-0 group-hover:opacity-70 transition-opacity duration-300 ease-in-out">
              <div className="absolute top-1/2 left-4 md:left-12 lg:left-24 text-primary-foreground text-center max-w-xl translate-y-full group-hover:translate-y-[-50%] transition-transform duration-500 ease-in-out p-4 md:p-6">
                <figcaption className="text-left text-2xl md:text-3xl lg:text-4xl">
                  <b>Car Sales Project</b>
                </figcaption>
                <h4 className="text-left mt-2 text-sm md:text-base">
                  <b>NEXT.JS TYPESCRIPT TAILWINDCSS</b>
                </h4>
                <p className="max-w-lg text-left my-2 md:my-4 text-sm md:text-base hidden md:block">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio necessitatibus, tempora nobis quo vero incidunt aut
                  ullam sequi similique sunt, iure, error voluptate facere in.
                  Hic ipsum libero commodi ipsa.
                </p>
                <div className="flex gap-4 justify-start mt-2">
                  <Link
                    className="text-primary-foreground hover:text-accent-foreground transition-colors duration-200"
                    href="/projects"
                  >
                    <Github size={16} className="md:w-5 md:h-5" />
                  </Link>
                  <Link
                    className="text-primary-foreground hover:text-accent-foreground transition-colors duration-200"
                    href="/projects"
                  >
                    <Link2 size={16} className="md:w-5 md:h-5" />
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
