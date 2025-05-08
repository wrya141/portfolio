"use client";
import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";
import { Scale } from "lucide-react";
const Itemslayout = ({ children, className }) => {
  return (
    <motion.div
      initial={{ Scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(
        "custom-bg p-6 xs:p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
export default Itemslayout;
