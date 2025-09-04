import Image from "next/image";

export default function DemocracysSection() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-5">
      <div className="">


        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.3em] text-gray-900 mb-4 font-resotho">
              DEMOCRACY
            </h3>
            <div className="lg:w-[400px]">

              <p className="text-lg leading-relaxed text-gray-700">
                Design and development of a modern
                website to strengthen Kubota&apos; presence
                in Quebec. The platform is utilized by 17
                dealers, featuring the seamless
                integration of API-driven data that
                automatically syncs with Kubota&apos;
                product management system.
              </p>
            </div>
          </div>

          <div className="flex w-full">
            <Image
              src="/assets/images/democracy.jpeg"
              alt="Politics rally"
              width={800}
              height={500}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}