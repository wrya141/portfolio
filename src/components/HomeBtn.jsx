"use client";
import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import { motion } from "framer-motion";
const NavLink = motion(Link);
const HomeBtn = () => {
  return (
    <NavLink
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      href={"/"}
      target={"_self"}
      className="text-foreground group rounded-full flex items-center justify-center custom-bg fixed z-50 top-4 left-4 w-fit self-start"
      aria-label={"Home"}
      name={"Home"}
    >
      <span className="w-14 h-14  relative p-4  hover:text-accent">
        <Home className="w-full h-auto " strokeWidth={1.5} />

        <span className="peer bg-transparent absolute top-0 left-0 h-full w-full" />
        <span
          className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 
        bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap  "
        >
          Home
        </span>
      </span>
    </NavLink>
  );
};

export default HomeBtn;
