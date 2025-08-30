"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/assets/images/hero1.jpg",
  "/assets/images/hero2.jpg",
  "/assets/images/hero3.webp",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // slower fade for elegance
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt={`Hero background ${index}`}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center justify-center  h-full text-white text-center px-4">
        <motion.hr
          className="w-full border-t border-white mt-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        />

      

<motion.h1
  className="text-5xl flex w-full max-w-full  flex-col font-bold mt-6"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
>
  {/* Left aligned */}
  <div className="flex flex-col lg:flex-row items-start w-full">
    <h1 className="text-[30px] leading-snug font-resotho md:text-[90px] lg:text-[60px] leading-none normal-case">
    INSIGHTFUL CONVERSATIONS
    </h1>
    <span className="text-[13px] md:text-[14px] lg:text-[20px] lg:ml-2 mt-1 lg:mt-0 normal-case">
      Residential and Signature Properties
    </span>
  </div>

  <div className="lg:h-10 h-0"></div>
  <motion.hr
          className="w-full border-t border-white my-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        />
        <div className="lg:h-10 h-0"></div>
  {/* Right aligned */}
  <div className="flex flex-col lg:flex-row items-start w-full justify-center text-right">
    <span className="text-[13px] md:text-[14px] lg:text-[20px] lg:mr-2 mb-1 lg:mb-0 normal-case">
      Residential and Signature Properties
    </span>
    <h1 className="text-[30px] leading-snug font-resotho md:text-[90px] lg:text-[60px] leading-none normal-case">
    INFLUENCEIAL VOICE
    </h1>
  </div>
</motion.h1>

        <motion.hr
          className="w-full border-t border-white my-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        />
      </div>
    </section>
  );
}
