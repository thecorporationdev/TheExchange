"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const features = [
  {
    id: 1,
    title: "Kubota",
    subtitle: "MANUFACTURING & INDUSTRIAL",
    description:
      "Kubota specializes in innovative manufacturing and industrial solutions, delivering reliable machinery across the globe.",
    image: "/assets/images/hero1.jpg",
  },
  {
    id: 2,
    title: "Spafax",
    subtitle: "INFLIGHT & MEDIA",
    description:
      "Spafax provides premium inflight entertainment and media experiences that connect global audiences with engaging content.",
    image: "/assets/images/hero2.jpg",
  },
  {
    id: 3,
    title: "Ether Capital",
    subtitle: "FINTECH",
    description:
      "Ether Capital focuses on digital assets and blockchain innovation, bridging traditional finance with decentralized systems.",
    image: "/assets/images/hero3.webp",
  },
];

const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ height: "80px", opacity: 0, scale: 0.95 }}
      animate={
        inView
          ? { height: "auto", opacity: 1, scale: 1 }
          : { height: "80px", opacity: 0.6, scale: 0.95 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.2, // staggered animation
      }}
      className="overflow-hidden border-b border-gray-300 dark:border-gray-700 pb-6 flex flex-col md:flex-row items-start justify-between gap-6 w-full"
    >
      {/* Left: Text */}
      <motion.div
        className="w-full md:w-1/2 text-left px-4 md:px-8"
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.6, delay: index * 0.3 }}
      >
        <h3 className="text-3xl font-resotho font-bold">{feature.title}</h3>
        <p className="uppercase text-sm font-lato text-gray-500 mt-1">
          {feature.subtitle}
        </p>

        {/* Accordion description */}
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={
            inView ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
          }
          transition={{ duration: 0.6, delay: index * 0.4 }}
          className="text-gray-600 font-lato dark:text-gray-300 mt-3 text-base leading-relaxed overflow-hidden"
        >
          {feature.description}
        </motion.p>
      </motion.div>

      {/* Right: Image */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ scale: 0.9 }}
        animate={inView ? { scale: 1 } : { scale: 0.9 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        <Image
          src={feature.image}
          alt={feature.title}
          width={1200}
          height={400}
          className="rounded-md object-cover w-full h-28 md:h-32"
        />
      </motion.div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="w-full py-16 space-y-12 bg-white">
      {/* Right-aligned heading */}
      <div className="w-full text-left px-6">
        <h2 className="text-5xl font-resotho md:text-7xl font-extrabold tracking-wide uppercase text-gray-900">
          Our Features
        </h2>
      </div>

      <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Features;
