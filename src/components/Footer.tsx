import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-red-600 text-white px-4 md:px-12 lg:px-5">
      <div>
        <div className="w-full py-8 lg:pb-24 pb-15">
          <div className="relative w-[180px] h-[50px] sm:w-[220px] sm:h-[60px]">
            <Image
              src="/assets/images/sTUDIO WALL (1).png"
              alt="logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        <div className="tracking-wide text-white lg:space-y-3 space-y-0.5">
          <p className="lg:text-[14px] text-[9.5px] uppercase lg:tracking-[0.2em] tracking-[0.16em] font-resotho">
            Terms of Use
          </p>
          <div className="h-2 block md:hidden"></div>

          <p className="lg:text-[14px] text-[9.5px] uppercase lg:tracking-[0.2em] tracking-[0.16em] font-resotho">
            Privacy Policy
          </p>
          <div className="h-2 block md:hidden"></div>
          <p className="lg:text-[14px] text-[9.5px] uppercase lg:tracking-[0.2em] tracking-[0.16em] font-resotho">
            All Rights Reserved 2025 The Exchange Podcast
          </p>
          <div className="h-2 block md:hidden"></div>

          <p className="lg:text-[14px] text-[9.5px] uppercase lg:tracking-[0.2em] tracking-[0.16em] font-resotho">
            Social Media
          </p>
          <div className="h-0.5 block md:hidden"></div>
          <p className="lg:text-[15px] text-[9.5px]">
            <a
              href="https://facebook.com/TheExchangeAFR"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Facebook: facebook.com/TheExchangeAFR
            </a>
          </p>
          <p className="lg:text-[15px] text-[9.5px]">
            <a
              href="https://x.com/TheExchangeAFR"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              X (Twitter): x.com/TheExchangeAFR
            </a>
          </p>
          <p className="lg:text-[15px] text-[9.5px]">
            <a
              href="https://instagram.com/TheExchangeAFR"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram: instagram.com/TheExchangeAFR
            </a>
          </p>
          <p className="lg:text-[15px] text-[9.5px]">
            <a
              href="https://linkedin.com/company/TheExchangeAFR"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn: linkedin.com/company/TheExchangeAFR
            </a>
          </p>
          <p className="lg:text-[15px] text-[9.5px]">
            <a
              href="https://youtube.com/@TheExchangeAFR"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              YouTube: youtube.com/@TheExchangeAFR
            </a>
          </p>
        </div>
      </div>
      <div className="h-150"></div>
    </footer>
  );
}
