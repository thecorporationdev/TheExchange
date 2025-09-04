import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-red-600 text-white px-4 md:px-12 lg:px-5">
      <div>
        <div className="w-full py-8  flex">
          {/* <Image
            src="/assets/images/sTUDIO WALL (1).png"
            alt="MAK Management Logo"
            width={1200}
            height={200}
            className="w-auto md:w-full h-auto object-contain"
            priority
          /> */}
            <Image
              src="/assets/images/sTUDIO WALL (1).png"
              alt="logo"
              width={220}
              height={60}
              priority
            />
        </div>

        <div className="text-sm tracking-wide text-white space-y-3">
          <p className="uppercase font-resotho">Terms of Use</p>
          <p className="uppercase font-resotho">Privacy Policy</p>
          <p className="uppercase font-resotho">
            All Rights Reserved 2025 The Exchange Podcast
          </p>
          <p className="uppercase font-resotho">Social Media</p>
          <p className="font-normal text-[10px]">
            Facebook: facebook.com/TheExchangeAFR
          </p>
          <p className="font-normal text-[10px]">
            X (Twitter): x.com/TheExchangeAFR
          </p>
          <p className="font-normal text-[10px]">
            Instagram: instagram.com/TheExchangeAFR
          </p>
          <p className="font-normal text-[10px]">
            LinkedIn: linkedin.com/company/TheExchangeAFR
          </p>
          <p className="font-normal text-[10px]">
            YouTube: youtube.com/@TheExchangeAFR
          </p>
        </div>
      </div>
      <div className="h-150"></div>
    </footer>
  );
}
