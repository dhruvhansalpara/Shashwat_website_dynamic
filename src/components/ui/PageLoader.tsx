import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_LOGO_PATH } from '../../config/branding';

const MIN_LOADER_MS = 3000;
const MAX_LOADER_MS = 3000;

/**
 * Premium Page Loader with brand animations.
 * Triggers on route changes to provide a polished transition experience.
 */
export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setIsLoading(true);

    const hideSoonTimer = setTimeout(() => {
      setIsLoading(false);
    }, MIN_LOADER_MS);

    const forceHideTimer = setTimeout(() => {
      setIsLoading(false);
    }, MAX_LOADER_MS);

    return () => {
      clearTimeout(hideSoonTimer);
      clearTimeout(forceHideTimer);
    };
  }, [location.pathname, location.search]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-gray-900 flex flex-col items-center justify-center p-4 overflow-hidden"
        >
          {/* Background Decorative Circles */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] right-[-5%] w-80 h-80 bg-brand-primary/10 rounded-full blur-[90px] pointer-events-none" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-brand-secondary/10 rounded-full blur-[90px] pointer-events-none" 
          />

          <div className="relative">
            {/* Multi-layered Pulsing Background Glow */}
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-brand-primary/40 rounded-full blur-3xl"
            />
            
            {/* Main Logo Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ 
                scale: 1, 
                rotate: 0,
              }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="relative z-10 bg-white p-4 rounded-[1.5rem] shadow-2xl"
            >
              <img
                src={BRAND_LOGO_PATH}
                alt="Shashwat Holidays"
                className="h-28 md:h-32 w-auto max-w-[min(78vw,220px)] object-contain"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-white/40 text-[9px] uppercase font-bold tracking-[0.28em] ml-[0.28em]">
                Crafting Your Dream Vacation
              </span>
              <div className="flex items-center justify-center gap-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.2, 1, 0.2],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                    className="w-1.5 h-1.5 bg-brand-secondary rounded-full"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
