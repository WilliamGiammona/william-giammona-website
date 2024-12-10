"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-6xl">
      <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            About <span className="text-orange">Me</span>
          </h1>
          <p className="text-lg leading-relaxed text-foreground/80">
            I&apos;m a frontend software engineer passionate about creating
            exceptional user experiences. With expertise in modern web
            technologies like React, TypeScript, and Next.js, I focus on
            building responsive, accessible, and performant web applications.
          </p>
          <p className="text-lg leading-relaxed text-foreground/80">
            My approach combines technical excellence with creative
            problem-solving, ensuring that each project not only meets but
            exceeds expectations. I&apos;m constantly learning and adapting to
            new technologies to deliver the best possible solutions.
          </p>
          <div className="flex gap-4">
            <Button asChild className="bg-orange hover:bg-orange/90">
              <Link href="#" onClick={(e) => e.preventDefault()}>
                Contact Me
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square">
          <Image
            src="/images/profile-pic.jpg"
            alt="Profile picture"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-foreground">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="font-bold mb-2">Frontend</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>React & Next.js</li>
              <li>TypeScript</li>
              <li>HTML & CSS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="font-bold mb-2">UI/UX</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>Responsive Design</li>
              <li>Animation</li>
              <li>Accessibility</li>
              <li>User Experience</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="font-bold mb-2">Tools</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Figma</li>
              <li>Chrome DevTools</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="font-bold mb-2">Soft Skills</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>Problem Solving</li>
              <li>Communication</li>
              <li>Team Collaboration</li>
              <li>Time Management</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
