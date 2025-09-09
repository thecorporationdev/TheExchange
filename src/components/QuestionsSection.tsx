import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function QuestionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    {
      question: "HOW DO I PARTICIPATE?",
      answer:
        "Design and development of a modern website to strengthen Kubota's presence in Quebec. The platform is utilized by 17 dealers, featuring the seamless integration of API-driven data that automatically syncs with Kubota's product management system.",
    },
    {
      question: "IS THE PODCAST FOR FREE?",
      answer:
        "Yes, the podcast is completely free to listen to. You can access it through our website or your favorite podcast app.",
    },
  ];

  return (
    <section className="w-full bg-white lg:py-16 py-10 px-6 md:px-12 lg:px-5">
      <div>
       

<h2 className="hidden md:block uppercase text-[24px] sm:text-[28px] md:text-[60px] lg:text-[70px] lg:tracking-[0.1em] tracking-[0.16em] text-gray-900 mb-5 lg:mb-8 sm:mb-12 font-resotho">
          QUESTIONS
        </h2>
        <h2 className="w-full block md:hidden uppercase conversations-heading tracking-[0.16em] text-gray-900 mb-10 font-resotho">
          QUESTIONS
        </h2>
        
        <motion.hr
          className="w-full border-t border-grey my-5 -mt-5 lg:mt-0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
        />
        <div className="space-y-6">
          {questions.map((item, index) => (
            <div
              key={index}
              className="border-b border-black pb-4 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between items-center w-full text-left gap-4"
              >
                <span 
                // className="text-[12px] md:text-[24px] font-semibold uppercase tracking-[0.06em] text-gray-900 font-resotho flex-1"
                className="text-[15px] sm:text-[24px] md:text-[30px] uppercase lg:tracking-[0.1em] tracking-[0.1em] text-gray-900 font-resotho flex-1"
                >
                  {item.question}
                </span>

<div className="flex border border-black shrink-0">
  <span
    className={`w-8 h-8 flex items-center justify-center transition-colors duration-200 ${
      openIndex === index ? "bg-red-600" : "bg-white"
    }`}
  >
    <Image
      src="/assets/svgs/-.svg"
      alt="minus"
      width={20}
      height={20}
      className={openIndex === index ? "invert brightness-0" : "invert-0"}
    />
  </span>

  <span
    className={`w-8 h-8 flex items-center justify-center transition-colors duration-200 ${
      openIndex !== index ? "bg-red-600" : "bg-white"
    }`}
  >
    <Image
      src="/assets/svgs/+.svg"
      alt="plus"
      width={20}
      height={20}
      className={openIndex !== index ? "invert brightness-0" : "invert-0"}
    />
  </span>
</div>

              </button>

              <div
                className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                  }`}
              >
                <p className="text-[16px] lg:text-[22px] leading-relaxed text-gray-700 max-w-[350px]">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
