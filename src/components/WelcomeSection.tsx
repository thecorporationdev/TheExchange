import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="relative bg-white py-24 px-6 md:px-12 lg:px-24 flex items-center justify-center min-h-[500px] overflow-hidden">
      <div className="w-full text-center">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-black font-bold mb-6 absolute top-6 left-6 md:left-12 lg:left-5">
          Welcome
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-gray-900 max-w-6xl text-left md:text-justify mx-auto">
          For 10 years, our Montreal web design agency has been delivering powerful, tailor-made websites that help brands anchor their authority. Now, we&apos;re harnessing this cargo of expertise to propel your next project.
        </h1>

        <p className="text-xs md:text-sm uppercase font-bold tracking-[0.3em] text-black mt-6 absolute bottom-6 right-6 md:right-12 lg:right-5">
          Know More
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;
