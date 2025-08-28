"use client";

import React from "react";

export default function IbizaSection() {
  return (
    <section className="w-full flex justify-center items-center px-4 py-12 bg-black">
      <div className="relative max-w-5xl w-full bg-[#dfe109] text-black rounded-xl p-6 md:p-10">
        {/* Decorative borders */}
        <div className="absolute top-0 left-0 w-full h-full border-2 border-black rounded-xl pointer-events-none" />

        {/* Title */}
        <h2 className="text-center text-2xl md:text-4xl font-serif italic font-semibold tracking-wide">
          located in <span className="uppercase not-italic">IBIZA</span>
        </h2>

        {/* Content */}
        <div className="mt-6 text-sm md:text-base leading-relaxed space-y-4 text-justify">
          <p>
            MAK Management has expanded its scope beyond traditional booking
            activities such as creating festival line ups, club events, concert
            shows, corporate and private events and focuses on{" "}
            <span className="font-bold">
              IMMERSIVE CULTURAL AND IDENTITY DRIVEN EXPERIENCES
            </span>{" "}
            that integrate MUSIC.
          </p>

          <p>
            This approach allows our clients to leverage our global network that
            can embark opportunities that can span over continents. This
            holistic approach of diversification allows us to showcase cultural
            experiences in a variety of settings by providing a more
            comprehensive avenue of{" "}
            <span className="font-bold">LIVE performances</span> to nurture a
            long term success for our clients and create memorable experiences
            that stand out.
          </p>
        </div>
      </div>
    </section>
  );
}
