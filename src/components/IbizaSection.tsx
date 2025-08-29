"use client";

import React from "react";
import { motion } from "framer-motion";

export default function IbizaSection() {
  return (
    <section className="w-full flex justify-center items-center px-4 py-12">
      <motion.div
        className="relative w-full bg-[#dfe109] text-black rounded-xl p-6 md:p-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
      >
        <div className="absolute top-0 left-0 w-full h-full border-2 border-black rounded-xl pointer-events-none" />

        <motion.h2
          className="text-center text-2xl md:text-4xl font-resotho italic font-semibold tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.2 }}
        >
          located in <span className="uppercase not-italic">IBIZA</span>
        </motion.h2>

        <motion.div
          className="mt-6 text-sm md:text-base leading-relaxed space-y-4 text-justify"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.3 }}
          viewport={{ amount: 0.2 }}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            MAK Management has expanded its scope beyond traditional booking
            activities such as creating festival line ups, club events, concert
            shows, corporate and private events and focuses on{" "}
            <span className="font-bold font-resotho">
              IMMERSIVE CULTURAL AND IDENTITY DRIVEN EXPERIENCES
            </span>{" "}
            that integrate MUSIC.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            This approach allows our clients to leverage our global network that
            can embark opportunities that can span over continents. This
            holistic approach of diversification allows us to showcase cultural
            experiences in a variety of settings by providing a more
            comprehensive avenue of{" "}
            <span className="font-bold font-resotho">LIVE performances</span> to
            nurture a long term success for our clients and create memorable
            experiences that stand out.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
