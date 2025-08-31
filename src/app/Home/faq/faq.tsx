// components/CoffeeAccordion.tsx
"use client";
import { useState } from "react";
// import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

type Coffee = {
  id: string;
  tag: string;
  tagColor: string;
  name: string;
  flavor: string;
  origin: string;
  type: string;
  description: string;
};

const coffees: Coffee[] = [
  {
    id: "1",
    tag: "BF-X-01",
    tagColor: "bg-orange-500",
    name: "DOUBLESTAR",
    flavor: "FRUITY & BOLD",
    origin: "MULTI ORIGIN",
    type: "OMNI",
    description:
      "A bold and fruity blend designed for coffee lovers who want intensity with balance.",
  },
  {
    id: "2",
    tag: "BF-X-02",
    tagColor: "bg-lime-400",
    name: "EARTHSHINE",
    flavor: "SWEET & BALANCED",
    origin: "MULTI ORIGIN",
    type: "OMNI",
    description:
      "A smooth and sweet profile, ideal for those who prefer balance in every sip.",
  },
  {
    id: "3",
    tag: "BF-X-03",
    tagColor: "bg-purple-600",
    name: "NEBULA",
    flavor: "BRIGHT & SMOOTH",
    origin: "MULTI ORIGIN",
    type: "OMNI",
    description:
      "Crisp and vibrant, Nebula brings brightness and smooth texture to the cup.",
  },
  {
    id: "4",
    tag: "IO-E-09",
    tagColor: "bg-black",
    name: "LOS NOGALES",
    flavor: "SWEET AND MILD",
    origin: "ISOLATED ORIGIN",
    type: "ESPRESSO",
    description:
      "A delicate espresso with sweet mild notes, perfect for a refined experience.",
  },
];

export default function CoffeeAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full p-4"> 
      {coffees.map((coffee) => (
        <div key={coffee.id} className="border-b py-6 w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full">
            <div className="flex items-center gap-3">
              <span
                className={`text-white text-sm font-bold px-3 py-1 rounded-full font-resotho ${coffee.tagColor}`}
              >
                {coffee.tag}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-resotho">{coffee.name}</h2>
            </div>

            <div className="flex flex-wrap gap-6 text-sm font-semibold uppercase font-resotho">
              <span>{coffee.flavor}</span>
              <span>{coffee.origin}</span>
              <span>{coffee.type}</span>
            </div>

{/* Toggle Button */}
<button
  onClick={() => toggleAccordion(coffee.id)}
  className={`ml-auto flex items-center justify-center transition-all duration-300 ${
    openId === coffee.id
      ? "w-10 h-10 rounded-full bg-black text-white"
      : "w-12 h-6 rounded-full border border-black bg-white relative"
  }`}
>
  {openId === coffee.id ? (
    <span className="text-lg font-bold">×</span>
  ) : (
    <>
      <span className="text-lg font-bold absolute right-2 text-black">+</span>
      <span className="w-6 h-6 rounded-full bg-black absolute left-0" />
    </>
  )}
</button>



          </div>

          {/* Accordion Content with Animation */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openId === coffee.id ? "max-h-40 mt-4" : "max-h-0"
            }`}
          >
            <p className="text-gray-600 text-sm md:text-base">
              {coffee.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
