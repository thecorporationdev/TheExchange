import Image from "next/image";

export default function PeopleSection() {
  const people = [
    {
      name: "FEMI SONEYE",
      title: "KEY ANCHOR",
      image: "/assets/images/femi.jpeg", 
      width: 400,
      height: 500,
    },
    {
      name: "JOCELYN DUMAS",
      title: "KEY ANCHOR",
      image: "/assets/images/woman1.jpeg", 
      width: 200,
      height: 250,
    },
    {
      name: "FEMI SONEYE",
      title: "KEY ANCHOR",
      image: "/assets/images/femi2.jpeg", 
      width: 600,
      height: 700,
    },
    {
      name: "JOCELYN DUMAS",
      title: "KEY ANCHOR",
      image: "/assets/images/woman2.jpeg", 
      width: 180,
      height: 220,
    },
  ];

  return (
    <section className="w-full bg-white px-6 md:px-12 lg:px-5">
      <div className="">
        <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-wide text-gray-900 mb-12">
          PEOPLE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px]">
          {people.map((person, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              
              <Image 
              src={person.image} 
              alt={person.name} 
              width={person.width} 
              height={person.height} 
              className={`w-full h-[${person.height}px] object-cover rounded-none`} />
              <div className="mt-4">
                <p className="text-sm font-medium uppercase tracking-wider text-gray-900">
                  {person.name}
                </p>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-700">
                  {person.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}