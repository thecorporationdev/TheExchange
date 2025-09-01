// import Image from "next/image";

// export default function PeopleSection() {
//   const people = [
//     {
//       name: "FEMI SONEYE",
//       title: "KEY ANCHOR",
//       image: "/assets/images/femi.jpeg",
//       width: 600,
//       height: 700,
//     },
//     {
//       name: "JOCELYN DUMAS",
//       title: "KEY ANCHOR",
//       image: "/assets/images/woman1.jpeg",
//       width: 200,
//       height: 250,
//     },
//     {
//       name: "FEMI SONEYE",
//       title: "KEY ANCHOR",
//       image: "/assets/images/femi2.jpeg",
//       width: 400,
//       height: 500,
//     },
//     {
//       name: "JOCELYN DUMAS",
//       title: "KEY ANCHOR",
//       image: "/assets/images/woman2.jpeg",
//       width: 180,
//       height: 220,
//     },
//   ];

//   return (
//     <section className="w-full bg-white px-6 md:px-12 lg:px-5">
//       <div>
//         <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-wide text-gray-900 mb-12 font-resotho">
//           PEOPLE
//         </h2>

//         <div className="flex flex-row gap-[2px] w-full  whitespace-nowrap overflow-hidden">
//           {people.map((person, index) => {
//             const totalWidth = people.reduce((sum, p) => sum + p.width, 0);
//             const percentWidth = (person.width / totalWidth) * 100;

//             return (
//               <div
//                 key={index}
//                 className="flex flex-col items-start"
//                 style={{ width: `${percentWidth}%`, height: "auto" }}
//               >
//                 <Image
//                   src={person.image}
//                   alt={person.name}
//                   width={person.width}
//                   height={person.height}
//                   className="object-cover w-full h-auto"
//                 />
//                 <div className="mt-1">
//                   <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-black">
//                     {person.name}
//                   </p>
//                   <p className="text-[9px] md:text-[10px] font-medium uppercase tracking-wider text-black">
//                     {person.title}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }



import Image from "next/image";

export default function PeopleSection() {
  const people = [
    {
      name: "FEMI SONEYE",
      title: "KEY ANCHOR",
      image: "/assets/images/femi.jpeg",
      width: 600,
      height: 700,
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
      width: 400,
      height: 500,
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
      <div>
        <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-wide text-gray-900 mb-12 font-resotho">
          PEOPLE
        </h2>

        {/* Mobile = grid (2 cols), Desktop = flex */}
        <div className="grid grid-cols-2 gap-[2px] md:flex md:flex-row md:gap-[2px] w-full overflow-hidden">
          {people.map((person, index) => {
            const totalWidth = people.reduce((sum, p) => sum + p.width, 0);
            const percentWidth = (person.width / totalWidth) * 100;

            return (
              <div
                key={index}
                className="flex flex-col items-start w-full md:w-auto"
                style={{
                  width: undefined, // remove on mobile
                  height: "auto",
                  ...(typeof window !== "undefined" &&
                    window.innerWidth >= 768 && { width: `${percentWidth}%` }), // apply only on md+
                }}
              >
                <Image
                  src={person.image}
                  alt={person.name}
                  width={person.width}
                  height={person.height}
                  className="object-cover w-full h-auto"
                />
                <div className="mt-1">
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-black">
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
    </section>
  );
}
