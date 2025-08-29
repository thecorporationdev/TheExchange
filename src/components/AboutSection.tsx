"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-left">
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
        </div>

        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <Image
            src="/assets/images/OIP.webp" 
            alt="Crafted for success container"
            width={700}
            height={400}
            className="w-full max-w-lg h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
