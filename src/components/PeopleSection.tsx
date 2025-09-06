"use client";

import { useState } from "react";
import Image from "next/image";

type Person = {
  name: string;
  title: string;
  image: string;
  width: number;
  height: number;
  bio: string;
};

export default function PeopleSection() {
  const people: Person[] = [
    {
      name: "FEMI SONEYE",
      title: "KEY ANCHOR",
      image: "/assets/images/femi.jpeg",
      width: 600,
      height: 600,
      bio: "Femi Soneye is an experienced broadcaster and key anchor with years of expertise in insightful conversations and impactful storytelling.",
    },
    {
      name: "JOCELYN DUMAS",
      title: "KEY ANCHOR",
      image: "/assets/images/woman1.jpeg",
      width: 200,
      height: 250,
      bio: "Jocelyn Dumas is a renowned media personality, bringing powerful narratives and influential voices to the forefront.",
    },
    {
      name: "FEMI SONEYE",
      title: "KEY ANCHOR",
      image: "/assets/images/femi2.jpeg",
      width: 400,
      height: 600,
      bio: "Femi Soneye continues to shape meaningful discussions with his dynamic approach to anchoring and journalism.",
    },
    {
      name: "JOCELYN DUMAS",
      title: "KEY ANCHOR",
      image: "/assets/images/woman2.jpeg",
      width: 180,
      height: 220,
      bio: "Jocelyn Dumas inspires audiences through thought-provoking interviews and engaging storytelling.",
    },
  ];

  const totalWidth = people.reduce((sum, p) => sum + p.width, 0);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  return (
    <section className="w-full bg-white px-6 md:px-12 lg:px-5">
      <div>
        <h2 className="text-[24px] sm:text-[28px] md:text-[60px] lg:text-[70px] lg:tracking-[0.1em] tracking-[0.16em] font-bold uppercase text-gray-900 mb-12 font-resotho">
          PEOPLE
        </h2>

        <div className="grid grid-cols-1 gap-5 md:flex md:flex-row md:gap-[10px] w-full overflow-hidden">
          {people.map((person, index) => {
            const percentWidth = (person.width / totalWidth) * 100;

            return (
              <div
                key={index}
                className="flex flex-col items-start w-full cursor-pointer"
                style={{ flexBasis: `${percentWidth}%` }}
                onClick={() => setSelectedPerson(person)}
              >
                {/* <Image
                  src={person.image}
                  alt={person.name}
                  width={person.width}
                  height={person.height}
                  className="object-cover w-full h-auto"
                /> */}
          {/* <Image
  src={person.image}
  alt={person.name}
  width={person.width}
  height={person.height}
  className="object-cover object-top w-full max-h-[400px] md:max-h-[450px] lg:max-h-[650px]"
/> */}
<Image
  src={person.image}
  alt={person.name}
  width={person.width}
  height={person.height}
  className={`w-full ${
    index === 0
      ? "object-cover object-top max-h-[400px] md:max-h-[450px] lg:max-h-[550px]"
      : index === 2
      ? "object-cover object-top max-h-[500px] md:max-h-[600px] lg:max-h-[750px]"
      : "object-cover object-top max-h-[400px] md:max-h-[450px] lg:max-h-[500px]"
  }`}
/>




                <div className="mt-1">
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.16em] text-black font-resotho">
                    {person.name}
                  </p>
                  <p className="text-[9px] md:text-[10px] font-medium uppercase tracking-wider text-black">
                    {person.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dialog */}
      {selectedPerson && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative animate-fadeIn">
            <button
              onClick={() => setSelectedPerson(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl font-bold"
            >
              ×
            </button>
            <div className="flex flex-col items-center text-center">
              <Image
                src={selectedPerson.image}
                alt={selectedPerson.name}
                width={250}
                height={300}
                className="object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold uppercase text-gray-800 font-resotho">
                {selectedPerson.name}
              </h3>
              <p className="text-sm font-medium uppercase text-gray-600">
                {selectedPerson.title}
              </p>
              <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                {selectedPerson.bio}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
