"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const bikes = [
  {
    id: 1,
    title: "Estrada",
    description:
      "Projetadas para inspirar performance e desafiar limites, estas bicicletas aliam design inovador à tecnologia de ponta, garantindo desempenhos excepcionais.",
    image: "/assets/images/bike1.webp",
  },
  {
    id: 2,
    title: "Gravel",
    description:
      "Desenhadas para superar os desafios mais exigentes e imprevisíveis, estas bicicletas garantem performances extremas.",
    image: "/assets/images/bike2.webp",
  },
  {
    id: 3,
    title: "Montanha",
    description:
      "Concebidas para desafiar os limites do convencional e explorar o inexplorado. Robustas e versáteis, não há terreno difícil.",
    image: "/assets/images/bike4.webp",
  },
  {
    id: 4,
    title: "Cidade",
    description:
      "Perfeitas para utilização diária, combinando design, eficiência e sustentabilidade para deslocações ágeis e práticas.",
    image: "/assets/images/bike1.webp",
  },
];

export default function BikeCategories() {
  return (
    <section className="w-full bg-[#0f0f0d] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
          Categorias de Bicicletas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bikes.map((bike, index) => (
            <motion.div
              key={bike.id}
              className="bg-[#1a1a18] rounded-xl overflow-hidden shadow-lg flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-full h-56 md:h-64">
                <Image
                  src={bike.image}
                  alt={bike.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">{bike.title}</h3>
                <p className="text-sm text-gray-300">{bike.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
