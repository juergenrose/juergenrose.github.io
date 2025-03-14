import { motion } from "framer-motion";

const images = import.meta.glob("/src/assets/skills/*.{png,jpg,jpeg,gif,svg}", {
  eager: true,
});

const imageUrls = Object.values(images).map((mod: any) => mod.default);

export default function Skills() {
  return (
    <section className="flex flex-col items-center justify-center mx-auto overflow-hidden border-2 border-r-0 border-l-0 border-violet-400 mt-20 w-max">
      <div className="relative flex w-full overflow-hidden">
        <motion.div
          className="flex gap-5 p-4 w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {imageUrls.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Skill ${index + 1}`}
              className="w-16 h-auto p-2"
            />
          ))}
        </motion.div>

        <motion.div
          className="flex gap-5 p-4 w-max absolute left-full top-0"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {imageUrls.map((src, index) => (
            <img
              key={`dup-${index}`}
              src={src}
              alt={`Skill ${index + 1}`}
              className="w-16 h-auto p-2"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
