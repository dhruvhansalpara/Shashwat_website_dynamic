import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { tours } from '../../data/tours';
import {
  filterDestinationSuggestions,
  getDestinationPickerSuggestions,
} from '../../features/tours/utils/search';
import { getTodayInputDate } from '../../utils/date';
import HeroSearchForm from '../../features/home/hero/components/HeroSearchForm';
import HeroSlideContent from '../../features/home/hero/components/HeroSlideContent';
import {
  HERO_SLIDES,
  HERO_SLIDE_INTERVAL_MS,
  HERO_SLIDE_VARIANTS,
} from '../../features/home/hero/constants';
import Badge from '../ui/Badge';

export default function Hero() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState(() => getTodayInputDate());
  const [travelers, setTravelers] = useState('2');
  const [suggestOpen, setSuggestOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const destinationWrapRef = useRef<HTMLDivElement>(null);

  const todayInputMin = useMemo(() => getTodayInputDate(), []);
  const allPickSuggestions = useMemo(() => getDestinationPickerSuggestions(tours), []);
  const filteredPickSuggestions = useMemo(
    () => filterDestinationSuggestions(allPickSuggestions, destination),
    [allPickSuggestions, destination]
  );

  useEffect(() => {
    const onDocumentMouseDown = (event: MouseEvent) => {
      if (!destinationWrapRef.current?.contains(event.target as Node)) {
        setSuggestOpen(false);
        setHighlightIndex(-1);
      }
    };

    document.addEventListener('mousedown', onDocumentMouseDown);
    return () => document.removeEventListener('mousedown', onDocumentMouseDown);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, HERO_SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  const pickSuggestion = useCallback((name: string) => {
    setDestination(name);
    setSuggestOpen(false);
    setHighlightIndex(-1);
  }, []);

  const handleDestinationKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!filteredPickSuggestions.length) {
      if (event.key === 'Escape') setSuggestOpen(false);
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      setSuggestOpen(false);
      setHighlightIndex(-1);
      return;
    }

    if (!suggestOpen && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
      setSuggestOpen(true);
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setHighlightIndex((index) => (index < 0 ? 0 : Math.min(index + 1, filteredPickSuggestions.length - 1)));
      setSuggestOpen(true);
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setHighlightIndex((index) => (index <= 0 ? -1 : index - 1));
      return;
    }

    if (event.key === 'Enter' && highlightIndex >= 0) {
      const pick = filteredPickSuggestions[highlightIndex];
      if (pick) {
        event.preventDefault();
        pickSuggestion(pick);
      }
    }
  };

  const handleFindTours = (event: React.FormEvent) => {
    event.preventDefault();
    setSuggestOpen(false);
    setHighlightIndex(-1);

    const params = new URLSearchParams();
    const trimmedDestination = destination.trim();

    if (trimmedDestination) params.set('destination', trimmedDestination);
    if (travelDate) params.set('date', travelDate);
    if (travelers) params.set('travelers', travelers);

    const queryString = params.toString();
    navigate(queryString ? `/tours?${queryString}` : '/tours');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-44 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={HERO_SLIDE_VARIANTS}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 origin-center"
          >
            <img
              src={HERO_SLIDES[currentSlide].image}
              alt="Hero Travel"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="site-container relative z-10 text-center pb-24">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <Badge variant="glass" size="base" className="mb-2">
              Explore the World with Shashwat
            </Badge>
          </motion.div>

          <div className="flex min-h-[220px] flex-col items-center justify-center md:min-h-[280px]">
            <AnimatePresence mode="wait">
              <React.Fragment key={currentSlide}>
                <HeroSlideContent slide={HERO_SLIDES[currentSlide]} />
              </React.Fragment>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <HeroSearchForm
            destination={destination}
            travelDate={travelDate}
            travelers={travelers}
            suggestionsOpen={suggestOpen}
            highlightedSuggestionIndex={highlightIndex}
            suggestions={filteredPickSuggestions}
            minTravelDate={todayInputMin}
            destinationWrapRef={destinationWrapRef}
            onSubmit={handleFindTours}
            onDestinationChange={(value) => {
              setDestination(value);
              setHighlightIndex(-1);
              setSuggestOpen(true);
            }}
            onDestinationFocus={() => setSuggestOpen(true)}
            onDestinationKeyDown={handleDestinationKeyDown}
            onTravelDateChange={setTravelDate}
            onTravelersChange={setTravelers}
            onSuggestionHover={setHighlightIndex}
            onSuggestionPick={pickSuggestion}
            onSuggestionMouseDown={(event) => event.preventDefault()}
          />
        </motion.div>
      </div>
    </section>
  );
}
