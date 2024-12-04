"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useModal } from "./ModalContext";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "next-themes";

const ModeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Nav = () => {
  const { setIsFormVisible } = useModal();

  return (
    <nav className="relative font-sans flex justify-between w-full max-w-6xl mx-auto h-24 items-center px-5 z-10">
      <figure>
        <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
      </figure>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center">
        <li className="mx-3 relative">
          <Link
            className="text-foreground font-bold after:content-[''] after:absolute after:-bottom-1 after:h-1 after:w-0 after:bg-foreground after:right-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0"
            href="/"
          >
            About
          </Link>
        </li>
        <li className="mx-3 relative">
          <Link
            className="text-foreground font-bold after:content-[''] after:absolute after:-bottom-1 after:h-1 after:w-0 after:bg-foreground after:right-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0"
            href="/projects"
          >
            Projects
          </Link>
        </li>
        <li className="mx-3 relative">
          <Link
            onClick={() => setIsFormVisible(true)}
            className="text-foreground font-bold after:content-[''] after:absolute after:-bottom-1 after:h-1 after:w-0 after:bg-foreground after:right-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0"
            href="#"
          >
            Contact
          </Link>
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-2">
        <ModeToggle />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Menu className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-6 mt-8">
              <Link className="text-foreground font-bold text-lg" href="/">
                About
              </Link>
              <Link
                className="text-foreground font-bold text-lg"
                href="/projects"
              >
                Projects
              </Link>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  setIsFormVisible(true);
                }}
                className="text-foreground font-bold text-lg"
                href="#"
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Nav;
