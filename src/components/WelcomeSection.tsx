import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="relative py-15 px-6 md:px-12 lg:px-24 flex items-center justify-center overflow-hidden">
      <div className="w-full text-center">
        <p className="font-bold lg:text-[16px] text-[12px]  uppercase lg:tracking-[0.1em] tracking-[0.16em] text-black font-bold mb-6 absolute lg:top-15 top-10 left-4 md:left-12 lg:left-5 font-resotho">
          Welcome
        </p>

        <h1 className="mt-[15px] ml-5 md:ml-0 md:mt-10 text-[27px] md:text-[36px] lg:text-[48px] font-medium text-gray-900 max-w-6xl text-left leading-[40px] md:leading-tight lg:leading-snug md:text-left mx-auto">
          For 10 years, our Montreal web design agency has been delivering powerful, tailor-made websites that help brands anchor their authority. Now, we&apos;re harnessing this cargo of expertise to propel your next project.
        </h1>

        <p className="-mt-[-15px] md:mt-[20px] font-bold lg:text-[14.5px] text-[8px] uppercase font-bold lg:tracking-[0.1em] tracking-[0.16em] text-black absolute   right-3 md:right-12 lg:right-5 font-resotho">
          Know More
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;
