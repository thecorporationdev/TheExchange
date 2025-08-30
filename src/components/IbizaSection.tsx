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
<motion.h2
  className="w-full text-[32px] sm:text-[60px] md:text-[90px] lg:text-[80px] font-serif italic text-center leading-tight tracking-wide"
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
  in <span className="uppercase italic">IBIZA</span> located in{' '}
  <span className="uppercase italic">IBIZA</span>
  <span className="italic"> locates</span>
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
            <span className="">
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
            <span className="">LIVE performances</span> to nurture a
            long term success for our clients and create memorable experiences
            that stand out.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
