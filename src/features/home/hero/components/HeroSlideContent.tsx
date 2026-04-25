import React from 'react';
import { motion } from 'motion/react';
import { HERO_TITLE_VARIANTS } from '../constants';

type HeroSlide = {
  title: string;
  subtitle: string;
  description: string;
};

type HeroSlideContentProps = {
  slide: HeroSlide;
};

export default function HeroSlideContent({ slide }: HeroSlideContentProps) {
  return (
    <motion.div className="flex flex-col items-center">
      <div className="mb-1 overflow-hidden py-1 sm:py-1.5">
        <motion.h1
          variants={HERO_TITLE_VARIANTS}
          initial="enter"
          animate="center"
          exit="exit"
          className="font-display text-5xl font-black tracking-tighter text-white md:text-7xl lg:text-8xl leading-[1.06] md:leading-[1.05]"
        >
          {slide.title}
        </motion.h1>
      </div>

      <div className="mb-5 overflow-hidden py-1 sm:py-1.5">
        <motion.span
          initial={{ y: 36, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -36, opacity: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block text-4xl font-medium italic leading-[1.12] text-brand-primary md:text-6xl md:leading-[1.1] lg:text-7xl lg:leading-[1.08]"
        >
          {slide.subtitle}
        </motion.span>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mx-auto mb-8 max-w-2xl text-lg text-white/80 md:mb-9 md:text-xl"
      >
        {slide.description}
      </motion.p>
    </motion.div>
  );
}
