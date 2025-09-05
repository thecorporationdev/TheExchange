import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="relative bg-white py-24 px-6 md:px-12 lg:px-24 flex items-center justify-center min-h-[500px] overflow-hidden">
      <div className="w-full text-center">
        <p className="font-bold lg:text-[16px] text-[14px]  uppercase lg:tracking-[0.1em] tracking-[0.16em] text-black font-bold mb-6 absolute lg:top-15 top-10 left-6 md:left-12 lg:left-5 font-resotho">
          Welcome
          {/* welcome should be bigger then the know more for mobile? */}
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-gray-900 max-w-6xl text-left md:text-left mx-auto">
          For 10 years, our Montreal web design agency has been delivering powerful, tailor-made websites that help brands anchor their authority. Now, we&apos;re harnessing this cargo of expertise to propel your next project.
        </h1>

        <p className="font-bold lg:text-[16px] text-[14px] uppercase font-bold lg:tracking-[0.1em] tracking-[0.16em] text-black mt-6 absolute lg:bottom-20 bottom-6 right-6 md:right-12 lg:right-5 font-resotho">
          Know More
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;
