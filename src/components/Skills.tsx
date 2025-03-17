import { motion } from "framer-motion";

const images = import.meta.glob("/src/assets/skills/*.{png,jpg,jpeg,gif,svg}", {
  eager: true,
});

// Extract image URLs from the imported modules
const imageUrls = Object.values(images).map((mod: any) => mod.default);

// Calculate the number of repetitions to ensure seamless looping
const repeatCount = Math.ceil(100 / imageUrls.length) * 2;

export default function Skills() {
  return (
    <section className="w-full max-w-[900px] mx-auto border-2 border-r-0 border-l-0 border-violet-400 mt-20 overflow-hidden">
      <div className="relative flex w-full overflow-hidden">
        {/* Animated scrolling container */}
        <motion.div
          className="flex gap-4 p-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {/* Duplicate images dynamically to ensure smooth looping */}
          {Array.from({ length: repeatCount }).map((_, i) =>
            imageUrls.map((src, index) => (
              <img
                key={`${i}-${index}`}
                src={src}
                alt={`Skill ${index + 1}`}
                className="w-10 sm:w-12 md:w-14 lg:w-16 h-auto"
              />
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
}
