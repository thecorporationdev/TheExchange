"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/assets/images/image.jpeg",
  "/assets/images/image.jpeg",
  "/assets/images/image.jpeg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-5rem)] w-full overflow-hidden">
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


{/* Desktop: Full width with object-cover */}
<Image
  src={images[index]}
  alt={`Hero background ${index}`}
  fill
  priority
  className="object-cover w-full h-full hidden md:block"
  sizes="100vw"
/>

          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0" />

      <div className="relative z-10 flex flex-col justify-start h-full text-white px-4 pt-20 md:pt-30">
        <motion.hr
          className="w-full border-t border-[grey] mb-4 md:mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
        />

        <div className="w-full space-y-4 md:space-y-6">
          <motion.h1
            className="text-[24px] sm:text-[28px] md:text-[60px] lg:text-[70px] font-resotho font-bold uppercase lg:tracking-[0.1em] tracking-[0.19em] text-left leading-snug md:leading-tight text-black"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            INSIGHTFUL CONVERSATIONS
          </motion.h1>

          <motion.hr
            className="w-full border-t border-[grey] mb-4 md:mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          />

          <motion.h1
            className="text-[24px] sm:text-[28px] md:text-[60px] lg:text-[70px] font-resotho font-bold uppercase lg:tracking-[0.1em] tracking-[0.19em] text-right leading-snug md:leading-tight text-black"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          >
            INFLUENCIAL VOICES
          </motion.h1>
        </div>
      </div>
      
      {/* <div className="relative -mt-20 w-full h-[300px] sm:h-[400px]  px-1 md:hidden">
  <div className="relative w-full h-full">
    <Image
      src={images[index]}
      alt={`Hero mobile ${index}`}
      fill
      priority
      className="object-cover rounded-lg"
      sizes="100vw"
    />
  </div>
</div> */}
<div className="relative -mt-20 w-full h-[300px] sm:h-[400px] px-1 md:hidden">
  <AnimatePresence mode="wait">
    <motion.div
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="relative w-full h-full"
    >
      <Image
        src={images[index]}
        alt={`Hero mobile ${index}`}
        fill
        priority
        className="object-cover rounded-lg"
        sizes="100vw"
      />
    </motion.div>
  </AnimatePresence>
</div>

    </section>
  );
}