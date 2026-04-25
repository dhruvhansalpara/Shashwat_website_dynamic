export const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop',
    title: 'Journey to the',
    subtitle: 'Unforgettable',
    description:
      'Discover breathtaking destinations, experience unique cultures, and create memories that will last a lifetime.',
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop',
    title: 'Escape to the',
    subtitle: 'Tropical Paradise',
    description:
      'Relax on pristine white beaches, dive into crystal clear waters and find your piece of heaven on earth.',
  },
  {
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop',
    title: 'Reach the',
    subtitle: 'Highest Peaks',
    description:
      'Embark on an epic adventure through majestic mountains and find the thrill of life at the summit.',
  },
];

export const HERO_SLIDE_INTERVAL_MS = 8000;

export const HERO_SLIDE_VARIANTS = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    filter: 'brightness(1.5) blur(10px)',
    scale: 1.2,
  }),
  center: {
    zIndex: 1,
    x: 0,
    filter: 'brightness(1) blur(0px)',
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 40, damping: 15 },
      scale: { duration: 10, ease: 'linear' },
      filter: { duration: 1.2 },
    },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    filter: 'brightness(0.5) blur(5px)',
    scale: 0.9,
    transition: {
      x: { type: 'spring', stiffness: 40, damping: 15 },
      filter: { duration: 1.2 },
    },
  }),
};

export const HERO_TITLE_VARIANTS = {
  enter: { y: 48, opacity: 0 },
  center: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    y: -48,
    opacity: 0,
    transition: { duration: 0.8, ease: [0.7, 0, 0.84, 0] },
  },
};
