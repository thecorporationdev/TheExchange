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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt="Hero background"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-0">
      <hr className="w-full border-t-1 border-white mt-6" />

        <h1 className="text-5xl font-resotho md:text-7xl font-bold leading-tight">
          High-end <br />{" "}
          <span className="text-6xl md:text-8xl">Design + Build</span>
        </h1>

        <hr className="w-full border-t-1 border-white my-6" />

        <p className="text-lg font-lato md:text-2xl max-w-3xl">
          for elevated living – Residential, Adaptive, and Wellness spaces
        </p>

      </div>
    </section>
  );
}
