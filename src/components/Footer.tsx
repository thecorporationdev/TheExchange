import Image from "next/image";


export default function Footer() {
    return (
      <footer className="w-full bg-red-600 text-white py-12 px-6 md:px-12 lg:px-5">
        <div className="">
          <div className="w-full text-center py-8 px-4">
  <Image
    src="/assets/images/sTUDIO WALL (1).png"
    alt="MAK Management Logo"
    width={1200}  
    height={200}
    className=" w-full h-auto object-contain"
    priority
  />
</div>
  
          {/* Footer Text */}
          <div className="text-sm tracking-wide text-white space-y-3">
            <p className="uppercase">Terms of Use</p>
            <p className="uppercase">Privacy Policy</p>
            <p className="uppercase">All Rights Reserved 2025 The Exchange Podcast</p>
            <p className="uppercase">Social Media</p>
            <p>Facebook: facebook.com/TheExchangeAFR</p>
            <p>X (Twitter): x.com/TheExchangeAFR</p>
            <p>Instagram: instagram.com/TheExchangeAFR</p>
            <p>LinkedIn: linkedin.com/company/TheExchangeAFR</p>
            <p>YouTube: youtube.com/@TheExchangeAFR</p>
          </div>
        </div>
      </footer>
    );
  }