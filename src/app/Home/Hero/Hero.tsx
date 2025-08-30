// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// const images = [
//   "/assets/images/hero1.jpg",
//   "/assets/images/hero2.jpg",
//   "/assets/images/hero3.webp",
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 5000); // slower fade for elegance
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       <div className="absolute inset-0">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={index}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.5, ease: "easeInOut" }}
//             className="absolute inset-0"
//           >
//             <Image
//               src={images[index]}
//               alt={`Hero background ${index}`}
//               fill
//               priority
//               className="object-cover"
//             />
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       <div className="absolute inset-0 bg-black/40" />

//       <div className="relative z-10 flex flex-col items-center justify-center  h-full text-white text-center px-4">
//         <motion.hr
//           className="w-full border-t border-white mt-6"
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
//         />

// <motion.div
//   className="w-full max-w-6xl mx-auto"
//   initial={{ opacity: 0, y: 40 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
// >
//   <h1 className="text-[30px] md:text-[60px] lg:text-[60px] font-resotho font-bold tracking-wide text-right mt-6">
//     INSIGHTFUL CONVERSATIONS
//   </h1>
// </motion.div>

// <motion.hr
//   className="w-full border-t border-white my-6 origin-left mx-auto"
//   initial={{ scaleX: 0 }}
//   animate={{ scaleX: 1 }}
//   transition={{ duration: 1, ease: "easeOut", delay: 1 }}
// />

// <motion.div
//   className="w-full max-w-6xl mx-auto"
//   initial={{ opacity: 0, y: 40 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
// >
//   <h1 className="text-[30px] md:text-[60px] lg:text-[60px] font-resotho font-bold tracking-wide text-right mb-6">
//     INFLUENCIAL VOICES
//   </h1>
// </motion.div>


// <motion.hr
//   className="w-full border-t border-white my-6 origin-left"
//   initial={{ scaleX: 0 }}
//   animate={{ scaleX: 1 }}
//   transition={{ duration: 1, ease: "easeOut", delay: 1 }}
// />

//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/assets/images/hero1.jpg",
  "/assets/images/hero2.jpg",
  "/assets/images/hero3.webp",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt={`Hero background ${index}`}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero text content */}
      <div className="relative z-10 flex flex-col justify-center h-full text-white px-4">
        {/* Match header container width */}
        <div className="w-full ">
          {/* First line: align left */}
          <motion.h1
            className="text-[30px] md:text-[60px] lg:text-[70px] font-resotho font-bold tracking-wide text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            INSIGHTFUL CONVERSATIONS
          </motion.h1>

          <motion.hr
            className="w-full border-t border-white my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          />

          {/* Second line: align right */}
          <motion.h1
            className="text-[30px] md:text-[60px] lg:text-[70px] font-resotho font-bold tracking-wide text-right"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          >
            INFLUENCIAL VOICES
          </motion.h1>

          <motion.hr
            className="w-full border-t border-white my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
          />
        </div>
      </div>
    </section>
  );
}
