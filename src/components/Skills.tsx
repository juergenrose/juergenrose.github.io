import { motion } from "framer-motion";

const images = import.meta.glob("/src/assets/skills/*.{png,jpg,jpeg,gif,svg}", {
  eager: true,
});

const imageUrls = Object.values(images).map((mod: any) => mod.default);
// Duplicate images to create a seamless loop
const repeatedImages = [...imageUrls, ...imageUrls];

export default function Skills() {
  return (
    <section className="flex flex-col items-center justify-center mx-auto overflow-hidden border-2 border-teal-600 mt-20">
      <motion.div
        className="flex gap-5 mx-auto p-4 w-full"
        animate={{ x: ["00%", "-50%"] }} // Moves the icons left continuously
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        style={{ whiteSpace: "nowrap", display: "flex" }}
      >
        {repeatedImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${index + 1}`}
            className="w-20 h-auto p-2"
          />
        ))}
      </motion.div>
    </section>
  );
}
