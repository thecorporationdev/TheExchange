import Image from "next/image";

export default function ConversationsSection() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-12 lg:px-5">
      <div>
        <h2 className="uppercase text-[24px] sm:text-[28px] md:text-[60px] lg:text-[70px] lg:tracking-[0.1em] tracking-[0.16em] -lg:ml-1  text-gray-900 mb-5 lg:mb-8 sm:mb-12 font-resotho">
          CONVERSATIONS
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
          <div className="flex-1 text-center md:text-left">
  <h3 className="text-[15px] sm:text-[24px] md:text-[30px] text-justify font-bold uppercase lg:tracking-[0.1em] tracking-[0.12em] text-gray-900 mb-3 sm:mb-4 font-resotho">
    POLITICS
  </h3>
  <div className="lg:w-[400px]">
    <p className="text-[16px] lg:text-[22px] leading-relaxed text-gray-700 lg:text-left text-left sm:text-left">
      Design and development of a modern website to strengthen Kubota&apos;
      presence in Quebec. The platform is utilized by 17 dealers,
      featuring the seamless integration of API-driven data that
      automatically syncs with Kubota&apos; product management system.
    </p>
  </div>
</div>
<div className="hidden md:block"></div>

          {/* Image Section */}
          <div className="flex w-full">
            <Image
              src="/assets/images/conversion.jpeg"
              alt="Politics rally"
              width={800}
              height={500}
              className=" object-cover w-full h-[220px] sm:h-[300px] md:h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
