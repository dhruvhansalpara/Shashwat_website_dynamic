import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'World Traveler',
    content: 'My trip to Santorini with Shashwat was absolutely flawless. The attention to detail and choice of local guides made all the difference.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Michael Chen',
    role: 'Adventure Enthusiast',
    content: 'The Bali jungle swing tour was the highlight of my year! Booking was easy and the itinerary was perfect. Strongly recommended!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Lifestyle Blogger',
    content: 'Exquisite service. I felt like a VIP the entire time. Their local insights helped me capture some truly rare moments for my blog.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'David Wilson',
    role: 'Photographer',
    content: 'The lighting in Tuscany during their curated sunset tour was a dream. Everything was perfectly timed for the best shots.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Sophie Müller',
    role: 'History Buff',
    content: 'A deep dive into Egyptian history. The guides provided by Shashwat Holidays are exceptionally knowledgeable and passionate.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <section className="home-section-soft home-section-muted py-24">
      <div className="site-container">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <span className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-4 block">
              Guest Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Voices of Happy <span className="italic text-brand-primary font-medium">Travelers</span>
            </h2>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all active:scale-95 group shadow-sm bg-white"
            >
              <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all active:scale-95 group shadow-sm bg-white"
            >
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <div className="relative h-[480px] md:h-[400px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
              }}
              className="absolute inset-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-10 md:p-14 rounded-[32px] shadow-2xl shadow-gray-200/50 border border-white relative group">
                  <Quote className="absolute top-10 right-10 w-16 h-16 text-brand-primary/10" />
                  
                  <div className="flex gap-1 mb-8">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-brand-primary text-brand-primary" />
                    ))}
                  </div>

                  <p className="text-2xl md:text-3xl font-medium text-gray-800 mb-10 italic leading-snug">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div className="flex items-center gap-6">
                    <img 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].name} 
                      className="w-20 h-20 rounded-full object-cover border-4 border-brand-primary/10 shadow-lg" 
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-xl font-black text-gray-900">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm text-brand-primary font-bold uppercase tracking-[0.2em] mt-1">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`h-2.5 rounded-full transition-all duration-500 shadow-sm ${
                currentIndex === i ? 'w-10 bg-brand-primary' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
