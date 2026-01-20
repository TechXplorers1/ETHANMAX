import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TRANSITION_EASE, textRevealParent, textRevealChild } from "../utils/animations";

interface HeroSectionProps {
  image: string;
  title: string;
  subtitle: string;
}

export function HeroSection({ image, title, subtitle }: HeroSectionProps) {


  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  // Split title into words for staggered reveal
  const words = title.split(" ");

  return (
    <section className="relative w-full h-[95vh] min-h-[600px] overflow-hidden">
      {/* Background Image with Cinematic Scale & Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.25 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: TRANSITION_EASE }}
        >
          <ImageWithFallback
            src={image}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="text-center max-w-5xl overflow-hidden">
          <motion.div
            variants={textRevealParent}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8 overflow-hidden"
          >
            {words.map((word, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  variants={textRevealChild}
                  className="block text-6xl md:text-8xl lg:text-9xl text-white tracking-tighter leading-[0.9]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: TRANSITION_EASE }}
          >
            <p
              className="text-lg md:text-xl text-white/90 tracking-[0.2em] uppercase max-w-2xl mx-auto font-light"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {subtitle}
            </p> {/* -- Fixed closing tag -- */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}