"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Link2 } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="py-12">
      <div className="relative w-full max-w-6xl mx-auto px-6 md:px-12 xl:px-3 z-10">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-16 text-foreground">
          <b>
            Here are some of my <span className="text-orange">projects</span>
          </b>
        </h1>
        <ul className="space-y-12">
          <li>
            <figure className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/projectImages/artist.jpg"
                alt="artist project"
                className="w-full transition-all duration-300 ease-in-out group-hover:blur-sm group-hover:scale-108"
                width={1600}
                height={1600}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-primary/80 dark:bg-primary/90 opacity-0 group-hover:opacity-70 transition-opacity duration-300 ease-in-out">
                <div className="absolute top-1/2 left-4 md:left-12 lg:left-24 text-primary-foreground text-center max-w-xl translate-y-full group-hover:translate-y-[-50%] transition-transform duration-500 ease-in-out p-4 md:p-6">
                  <figcaption className="text-left text-2xl md:text-3xl lg:text-4xl">
                    <b>Artist Project</b>
                  </figcaption>
                  <h4 className="text-left mt-2 text-sm md:text-base">
                    <b>NEXT.JS TYPESCRIPT TAILWINDCSS</b>
                  </h4>
                  <p className="max-w-lg text-left my-2 md:my-4 text-sm md:text-base hidden md:block">
                    A portfolio website built using Next.js, Typescript, and
                    Tailwind CSS, for a talented concept artist who also
                    specializes in children&apos;s book illustrations. The site
                    showcases the artist&apos;s unique style and diverse
                    portfolio while providing a seamless, responsive experience
                    for potential clients and art directors.
                  </p>
                  <div className="flex gap-4 justify-start mt-2">
                    <Link
                      className="text-primary-foreground hover:text-accent-foreground transition-colors duration-200"
                      href="https://github.com/WilliamGiammona/gili-illustration-website"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="md:w-5 md:h-5" />
                    </Link>
                    <Link
                      className="text-primary-foreground hover:text-accent-foreground transition-colors duration-200"
                      href="https://gili-giammona-illustration.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Link2 size={16} className="md:w-5 md:h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </figure>
          </li>
          <li>
            <figure className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/projectImages/corporate.jpg"
                alt="corporate project"
                className="w-full transition-all duration-300 ease-in-out group-hover:blur-sm group-hover:scale-108"
                width={1600}
                height={1600}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-primary/80 dark:bg-primary/90 opacity-0 group-hover:opacity-70 transition-opacity duration-300 ease-in-out">
                <div className="absolute top-1/2 left-4 md:left-12 lg:left-24 text-primary-foreground text-center max-w-xl translate-y-full group-hover:translate-y-[-50%] transition-transform duration-500 ease-in-out p-4 md:p-6">
                  <figcaption className="text-left text-2xl md:text-3xl lg:text-4xl">
                    <b>Corporate Project</b>
                  </figcaption>
                  <h4 className="text-left mt-2 text-sm md:text-base">
                    <b>NEXT.JS TYPESCRIPT TAILWINDCSS</b>
                  </h4>
                  <p className="max-w-lg text-left my-2 md:my-4 text-sm md:text-base hidden md:block">
                    A professional website for a commercial real estate company,
                    built with Next.js using Typescript and Tailwind CSS. The
                    platform offers an intuitive user experience, helping
                    clients find the perfect commercial properties for their
                    business needs.
                  </p>
                  <div className="flex gap-4 justify-start mt-2">
                    <Link
                      className="text-primary-foreground hover:text-accent-foreground transition-colors duration-200"
                      href="https://github.com/WilliamGiammona/subacorp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="md:w-5 md:h-5" />
                    </Link>
                    <Link
                      className="text-primary-foreground hover:text-accent-foreground transition-colors duration-200"
                      href="https://subacorp.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Link2 size={16} className="md:w-5 md:h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </figure>
          </li>
          <li>
            <figure className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/projectImages/e-commerce.jpg"
                alt="e-commerce project"
                className="w-full transition-all duration-300 ease-in-out group-hover:blur-sm group-hover:scale-108"
                width={1600}
                height={1600}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-primary/80 dark:bg-primary/90 opacity-0 group-hover:opacity-70 transition-opacity duration-300 ease-in-out">
                <div className="absolute top-1/2 left-4 md:left-12 lg:left-24 text-primary-foreground text-center max-w-xl translate-y-full group-hover:translate-y-[-50%] transition-transform duration-500 ease-in-out p-4 md:p-6">
                  <figcaption className="text-left text-2xl md:text-3xl lg:text-4xl">
                    <b>E-commerce Project</b>
                  </figcaption>
                  <h4 className="text-left mt-2 text-sm md:text-base">
                    <b>NEXT.JS TYPESCRIPT TAILWINDCSS SANITY STRIPE</b>
                  </h4>
                  <p className="max-w-lg text-left my-2 md:my-4 text-sm md:text-base hidden md:block">
                    A full-featured e-commerce platform built with Next.js,
                    Sanity for content management, and Stripe for secure
                    payments. The site offers a seamless shopping experience
                    with product filtering, cart functionality, and a
                    streamlined checkout process.
                  </p>
                  <div className="flex gap-4 justify-start mt-2">
                    <Link
                      className="text-primary-foreground hover:text-accent-foreground transition-colors duration-200"
                      href="https://github.com/WilliamGiammona/e-commerce-sanity"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="md:w-5 md:h-5" />
                    </Link>
                    <Link
                      className="text-primary-foreground hover:text-accent-foreground transition-colors duration-200"
                      href="https://e-commerce-sanity-giammona.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Link2 size={16} className="md:w-5 md:h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </figure>
          </li>
          <li>
            <figure className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/projectImages/web3.jpg"
                alt="web3 project"
                className="w-full transition-all duration-300 ease-in-out group-hover:blur-sm group-hover:scale-108"
                width={1600}
                height={1600}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-primary/80 dark:bg-primary/90 opacity-0 group-hover:opacity-70 transition-opacity duration-300 ease-in-out">
                <div className="absolute top-1/2 left-4 md:left-12 lg:left-24 text-primary-foreground text-center max-w-xl translate-y-full group-hover:translate-y-[-50%] transition-transform duration-500 ease-in-out p-4 md:p-6">
                  <figcaption className="text-left text-2xl md:text-3xl lg:text-4xl">
                    <b>Web3 Project</b>
                  </figcaption>
                  <h4 className="text-left mt-2 text-sm md:text-base">
                    <b>NEXT.JS TYPESCRIPT TAILWINDCSS ETHERS.JS MORALIS</b>
                  </h4>
                  <p className="max-w-lg text-left my-2 md:my-4 text-sm md:text-base hidden md:block">
                    A decentralized application built with Next.js, TypeScript,
                    and TailwindCSS, leveraging Ethers.js, Moralis, and
                    Web3UIKit for blockchain integration. The platform enables
                    users to interact with smart contracts and blockchain data
                    through an intuitive interface, bringing Web3 functionality
                    to mainstream users.
                  </p>
                  <div className="flex gap-4 justify-start mt-2">
                    <Link
                      className="text-primary-foreground hover:text-accent-foreground transition-colors duration-200"
                      href="https://github.com/WilliamGiammona/global-web-three-dao"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="md:w-5 md:h-5" />
                    </Link>
                    <Link
                      className="text-primary-foreground hover:text-accent-foreground transition-colors duration-200"
                      href="https://globalwebthree.com/"
                      target="_blank"
                      rel="noopener noreferrer"
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
    </main>
  );
}
