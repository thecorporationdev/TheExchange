"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.2 }}
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-gray-900">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-500 mr-2">
              ABOUT
            </span>
            For 10 years, our Montreal web design agency has been delivering powerful, tailor-made websites that help brands anchor their authority.<br />
            Now, we’re harnessing this cargo of expertise to propel your next project.
          </p>
        </motion.div>
      </div>
    </section>
  );
}