"use client";

import React from "react";
import { motion } from "framer-motion";

export default function IbizaSection() {
  return (
    <section className="w-full bg-[#dfe109] px-4 py-16">
      <motion.div
        className="relative w-full text-black"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
      >
        {/* Big Title */}
        <motion.h2
          className="w-full text-center text-[48px] sm:text-[80px] md:text-[120px] lg:text-[120px] font-serif italic font-medium leading-none"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          located in{" "}
          <span className="uppercase not-italic font-bold">IBIZA</span>{" "}
          located
        </motion.h2>

        {/* Description */}
        <motion.div
          className="mt-12 text-center max-w-3xl mx-auto text-sm md:text-base leading-relaxed space-y-6"
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
            <span className="font-bold">
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
            <span className="font-bold">LIVE performances</span> to nurture a
            long term success for our clients and create memorable experiences
            that stand out.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
