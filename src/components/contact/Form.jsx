"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
  },
};
export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("sending your email please wait...");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000,
          },
        }
      )
      .then(
        () => {
          toast.success("i have recevied your message ", {
            id: toastId,
          });
        },
        (error) => {
          toast.error("there was an error ,please try agian later", {
            id: toastId,
          });
        }
      );
  };
  const onSubmit = (data) => {
    const tem = {
      to_name: "wrya",
      from_name: data.name,
      to_reply: data.email,
      message: data.message,
    };

    sendEmail(tem);
  };
  console.log(errors);

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col max-w-md w-full justify-center items-center space-y-4"
      >
        <motion.input
          variants={item}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          type="text"
          placeholder="name"
          {...register("name", {
            required: "this field is requierd",
            minLength: {
              value: 3,
              message: "name must be atleast 3 charechters",
            },
          })}
        />
        {errors.name && (
          <span className="inline-block self-start text-accent">
            {errors.name.message}
          </span>
        )}
        <motion.input
          variants={item}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          type="email"
          placeholder="email"
          {...register("email", { required: "this field is requierd" })}
        />
        {errors.email && (
          <span className="inline-block self-start text-accent">
            {errors.email.message}
          </span>
        )}
        <motion.textarea
          variants={item}
          {...register("message", {
            required: "this field is requierd",
            maxLength: {
              value: 500,
              message: "message must be less than 500 charechters",
            },
            minLength: {
              value: 25,
              message: "message must be more than 25 charechters",
            },
          })}
          placeholder="Message"
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.message && (
          <span className="inline-block self-start text-accent">
            {errors.message.message}
          </span>
        )}
        <motion.input
          variants={item}
          value={"send your message"}
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/5 cursor-pointer capitalize "
          type="submit"
        />
      </motion.form>
    </>
  );
}
