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
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-5">
      <div>
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wide text-gray-900 mb-12 font-resotho">
          QUESTIONS
        </h2>
        <motion.hr
          className="w-full border-t border-black my-6"
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
                {/* Question Text */}
                <span className="text-lg md:text-2xl font-semibold uppercase tracking-wide text-gray-900 font-resotho flex-1">
                  {item.question}
                </span>

                {/* Icons */}
                <div className="flex border border-black shrink-0">
                  <span
                    className={`w-8 h-8 flex items-center justify-center border border-black transition-colors duration-200 ${
                      openIndex === index
                        ? "bg-red-600"
                        : "bg-white"
                    }`}
                  >
                    <Image
                      src="/assets/svgs/-.svg"
                      alt="minus"
                      width={20}
                      height={20}
                      className="md:w-6 md:h-6 w-4 h-4"
                    />
                  </span>
                  <span
                    className={`w-8 h-8 flex items-center justify-center border border-gray-300 transition-colors duration-200 ${
                      openIndex === index
                        ? "bg-white"
                        : "bg-red-600"
                    }`}
                  >
                    <Image
                      src="/assets/svgs/+.svg"
                      alt="plus"
                      width={20}
                      height={20}
                      className="md:w-6 md:h-6 w-4 h-4"
                    />
                  </span>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-base md:text-lg leading-relaxed text-gray-700 max-w-2xl">
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
