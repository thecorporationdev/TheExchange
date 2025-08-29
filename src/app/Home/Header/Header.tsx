"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 border-b">
      <div className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <Link href="/" aria-label="Home">
            <Image
              src="/assets/images/sTUDIO WALL.png"
              alt="logo"
              width={120}
              height={40}
              priority
            />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="flex items-center text-lg font-semibold"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X size={28} />
          ) : isDesktop ? (
            "Menu"
          ) : (
            <Image
              src="/assets/svgs/menu.svg"
              alt="menu"
              width={28}
              height={28}
            />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "tween", duration: 0.35 }}
              className="fixed top-0 left-0 w-full bg-white shadow-lg z-50"
            >
              <div className="flex justify-end px-6 py-4">
                <button onClick={() => setOpen(false)} aria-label="Close menu">
                  <X size={28} />
                </button>
              </div>
              <nav className="flex font-resotho flex-col items-center space-y-6 p-8 text-lg font-medium">
                <a href="#" onClick={() => setOpen(false)}>Agence</a>
                <a href="#" onClick={() => setOpen(false)}>Services</a>
                <a href="#" onClick={() => setOpen(false)}>Projets</a>
                <a href="#" onClick={() => setOpen(false)}>Clients</a>
                <a href="#" onClick={() => setOpen(false)}>Insights</a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
