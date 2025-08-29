"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        <motion.div
          className="flex-1 text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.2 }} 
        >
          <h4 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
            About
          </h4>
          <p className="mt-4 text-2xl md:text-3xl lg:text-4xl font-medium leading-snug text-gray-900">
            For 10 years, our Montreal web design agency has been delivering
            powerful, tailor-made websites that help brands anchor their
            authority.
            <br />
            Now, we’re harnessing this cargo of expertise to propel your next
            project.
          </p>
        </motion.div>

        <motion.div
          className="flex-1 w-full flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.2 }} 
        >
          <Image
            src="/assets/images/OIP.webp"
            alt="Crafted for success container"
            width={700}
            height={400}
            className="w-full max-w-lg h-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
