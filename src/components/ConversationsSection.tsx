import Image from "next/image";

export default function ConversationsSection() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-12 lg:px-5">
      <div>
        {/* Title */}
        <h2 className="uppercase lg:tracking-[0.3em] tracking-[0.0089em] text-3xl sm:text-4xl -ml-1 -lg:ml-1 md:text-6xl font-bold text-gray-900 mb-8 sm:mb-12 font-resotho">
          CONVERSATIONS
        </h2>

        {/* Flex wrapper */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl text-justify sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.3em] text-gray-900 mb-3 sm:mb-4 font-resotho">
              POLITICS
            </h3>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 text-justify sm:text-left">
  Design and development of a modern website to strengthen Kubota&apos;
  presence in Quebec. The platform is utilized by 17 dealers,
  featuring the seamless integration of API-driven data that
  automatically syncs with Kubota&apos; product management system.
</p>

          </div>

          {/* Image Section */}
          <div className="flex-1 w-full">
            <Image
              src="/assets/images/conversion.jpeg"
              alt="Politics rally"
              width={800}
              height={500}
              className="rounded-lg shadow-lg object-cover w-full h-[220px] sm:h-[300px] md:h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
