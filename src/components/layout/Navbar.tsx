import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from '../../config/contact';
import { MAIN_NAV_ITEMS } from '../../config/navigation';
import { BRAND_LOGO_PATH } from '../../config/branding';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={cn(
          'transition-all duration-300 py-4 font-sans',
          (isScrolled || location.pathname !== '/') ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent'
        )}
      >
      <div className="site-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center cursor-pointer group rounded-lg bg-white p-1.5 shadow-lg border border-white/10 ring-1 ring-black/5 transition-all duration-300 hover:shadow-brand-primary/20 hover:scale-[1.02]"
          >
            <img
              src={BRAND_LOGO_PATH}
              alt="Shashwat Holidays"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {MAIN_NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  'text-sm xl:text-[15px] font-black uppercase tracking-[0.16em] transition-all hover:text-brand-primary',
                  'text-white',
                  location.pathname === item.href && "text-brand-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href={`tel:${CONTACT_PHONE_TEL}`}
              className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-white/90 transition-colors hover:text-brand-primary"
            >
              <Phone className="w-3.5 h-3.5 shrink-0 text-brand-primary" />
              <span>{CONTACT_PHONE_DISPLAY}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-900 border-t border-white/10 mt-4 overflow-hidden"
          >
            <div className="px-4 py-8 flex flex-col gap-6">
              {MAIN_NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-xl font-black uppercase tracking-widest text-white hover:text-brand-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-px bg-white/10 w-full" />
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="flex items-center gap-3 font-bold text-white/70 transition-colors hover:text-brand-primary"
              >
                <Phone className="w-4 h-4 shrink-0 text-brand-primary" />
                <span>{CONTACT_PHONE_DISPLAY}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </header>
  );
}
