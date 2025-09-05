import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-red-600 text-white px-4 md:px-12 lg:px-5">
      <div>
        <div className="w-full py-8 flex">
          <Image
            src="/assets/images/sTUDIO WALL (1).png"
            alt="logo"
            width={220}
            height={60}
            priority
          />
        </div>

        <div className="text-sm tracking-wide text-white space-y-3">
          <p className="uppercase lg:tracking-[0.1em] tracking-[0.16em] font-resotho">
            Terms of Use
          </p>
          <p className="uppercase lg:tracking-[0.1em] tracking-[0.16em] font-resotho">
            Privacy Policy
          </p>
          <p className="uppercase lg:tracking-[0.1em] tracking-[0.16em] font-resotho">
            All Rights Reserved 2025 The Exchange Podcast
          </p>

          <p className="uppercase lg:tracking-[0.1em] tracking-[0.16em] font-resotho">
            Social Media
          </p>
          <p className="font-normal text-[14px]">
            <a
              href="https://facebook.com/TheExchangeAFR"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Facebook: facebook.com/TheExchangeAFR
            </a>
          </p>
          <p className="font-normal text-[14px]">
            <a
              href="https://x.com/TheExchangeAFR"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              X (Twitter): x.com/TheExchangeAFR
            </a>
          </p>
          <p className="font-normal text-[14px]">
            <a
              href="https://instagram.com/TheExchangeAFR"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram: instagram.com/TheExchangeAFR
            </a>
          </p>
          <p className="font-normal text-[14px]">
            <a
              href="https://linkedin.com/company/TheExchangeAFR"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn: linkedin.com/company/TheExchangeAFR
            </a>
          </p>
          <p className="font-normal text-[14px]">
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
