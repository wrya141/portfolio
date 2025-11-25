"use client";
import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";
import ItemLayout from "./Itemslayout";
const Itemslayout = ({ children, className }) => {
  return (
    <motion.div
      className={clsx(
        "custom-bg p-6 xs:p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

const Aboutdet = () => {
  return (
    <section className="py-20 w-full ">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <Itemslayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className=" font-light text-xs sm:text-sm md:text-base">
            A javascript guy that has a lot of Knowledge in the language and
            it's framworks such as React and Next.js
          </p>
        </Itemslayout>
        <Itemslayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5 <sub className="font-semibold text-base"> Clients so far</sub>
          </p>
        </Itemslayout>
        <Itemslayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+{" "}
            <sub className="font-semibold text-base">
              {" "}
              Years in WebDev so far
            </sub>
          </p>
        </Itemslayout>

        <Itemslayout className={"col-span-full"}>
          <img
            src="https://skillicons.dev/icons?i=html,css,js,react,nodejs,express,c,cpp,cs,bootstrap,git,github,jquery,linux,mongodb,mysql,postman,prisma,tailwind,ts,vscode,python&theme=light"
            alt="wrya141"
            loading="lazy"
            className="w-full h-auto"
          />
        </Itemslayout>
        <Itemslayout className={"col-span-full  md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=wrya141&theme=dark&hide_border=true&background=EB54541D&currStreakLabel=FEFE58&ring=FEFE58"
            alt="GitHub Streak"
            loading="lazy"
          />
        </Itemslayout>
      </div>
    </section>
  );
};

export default Aboutdet;
