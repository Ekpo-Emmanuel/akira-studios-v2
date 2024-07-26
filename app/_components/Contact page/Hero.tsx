"use client";
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import localFont from "next/font/local";
import axios from "axios";
import ThankYou from "./Thankyou";
import { motion } from "framer-motion";

const bentoga = localFont({
  src: "../../../public/fonts/bentoga/Bentoga-Thin.otf",
});
const satoshi = localFont({
  src: [
    {
      path: "../../../public/fonts/Satoshi/Fonts/OTF/Satoshi-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../../public/fonts/Satoshi/Fonts/OTF/Satoshi-Light.otf",
      weight: "300",
      style: "light",
    },
  ],
});

interface FormInput {
  name: string;
  email: string;
  message: string;
}

const initialFormInput: FormInput = {
  name: "",
  email: "",
  message: "",
};

interface Errors {
  [key: string]: string;
}

export default function Hero() {
  const [formInput, setFormInput] = useState<FormInput>(initialFormInput);
  const [errors, setErrors] = useState<Errors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2,
      },
    },
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormInput((prevFormInput) => ({
      ...prevFormInput,
      [id]: value,
    }));
    validateField(id, value);
  };

  const validateField = (field: string, value: string) => {
    let error = "";
    switch (field) {
      case "name":
        if (!value) error = "Full Name is required";
        break;
      case "email":
        if (!value) error = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value))
          error = "Email address is invalid";
        break;
      case "message":
        if (!value) error = "Phone is required";
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: error,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;
    ["name", "email", "message"].forEach((field) => {
      const value = formInput[field as keyof FormInput];
      validateField(field, value);
      if (!value) valid = false;
    });

    if (valid) {
      setIsLoading(true);
      try {
        const response = await axios.post("/api/contact", formInput, {
          headers: { "Content-Type": "application/json" },
        });

        if (response.data.success) {
          console.log("Form submitted successfully:", response.data);
          setFormInput(initialFormInput);
          setErrors({});
          setIsSubmitted(true);
        }
      } catch (error) {
        console.error("Error sending email:", error);
      } finally {
        setIsLoading(false);
        setFormInput(initialFormInput);
        setIsSubmitted(true);
      }
    }
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <div className="relative px-4 max-w-7xl mx-auto mt-[15vh]">
        <motion.h1
          className={clsx(
            bentoga.className,
            "antialiased text-center text-[4rem] sm:text-[6rem] lg:text-[13rem] leading-[1.1] sm:leading-[.9]"
          )}
          variants={itemVariants}
        >
          Get in touch
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-[0.5fr,1fr] lg:gap-[3rem] gap-[2rem] mt-[3rem]">
          <motion.div variants={imageVariants}>
            <div className="rounded-[1rem] lg:rounded-full overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/665dcf7a89531558a6310cb3/665dcf7a89531558a6310d57_Contact%201%20Image.jpg"
                className="w-full"
                alt="contact image"
              />
            </div>
          </motion.div>
          {isSubmitted ? (
            <ThankYou />
          ) : (
            <motion.form
              method="post"
              onSubmit={handleSubmit}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <label className="text-[1.125rem]">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full pl-[.8rem] bg-[#fff7e7] placeholder:text-red placeholder:text-[1rem] border-b border-[#daba9a] focus:outline-none rounded-[.5rem] mt-[.5rem] py-[12px] px-[12px] text-[1rem] text-[#484848] mb-[1.5rem]"
                  value={formInput.name}
                  onChange={handleInputChange}
                  style={{ border: errors.name ? "1px solid #AF4042" : "" }}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label className="text-[1.125rem]">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full pl-[.8rem] bg-[#fff7e7] placeholder:text-red placeholder:text-[1rem] border-b border-[#daba9a] focus:outline-none focus:border-red rounded-[.5rem] mt-[.5rem] py-[12px] px-[12px] text-[1rem] text-[#484848] mb-[1.5rem]"
                  value={formInput.email}
                  onChange={handleInputChange}
                  style={{ border: errors.email ? "1px solid #AF4042" : "" }}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label className="text-[1.125rem]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full pl-[.8rem] bg-[#fff7e7] placeholder:text-red placeholder:text-[1rem] border-b border-[#daba9a] focus:outline-none rounded-[.5rem] mt-[.5rem] py-[12px] px-[12px] text-[1rem] text-[#484848] mb-[1.5rem]"
                  placeholder="Write your thoughts here..."
                  value={formInput.message}
                  onChange={handleInputChange}
                  style={{ border: errors.message ? "1px solid #AF4042" : "" }}
                ></textarea>
              </motion.div>
              <motion.div
                className="mt-[1.5rem] flex justify-center"
                variants={itemVariants}
              >
                <motion.button
                  type="submit"
                  className="bg-red text-white text-[1.125rem] py-[1.1rem] px-[2.2rem] font-semibold rounded-[.5rem] transition text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit
                </motion.button>
              </motion.div>
            </motion.form>
          )}
        </div>
      </div>
    </motion.div>
  );
}
