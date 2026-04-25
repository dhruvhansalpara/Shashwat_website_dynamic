import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send } from 'lucide-react';
import { CONTACT_WHATSAPP_DIGITS } from '../../../config/contact';

/**
 * Floating WhatsApp Chat Widget.
 * Provides direct support and lead generation through WhatsApp.
 */
export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = React.useState(false);
  const phoneNumber = CONTACT_WHATSAPP_DIGITS;
  const message = "Hello Shashwat Holidays! I'm interested in booking a tour.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-6 w-72 md:w-80 overflow-hidden relative"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg overflow-hidden border-2 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1543349689-d1cf82f05ca4?q=80&w=100" 
                    alt="Agent" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 leading-none mb-1">Shashwat Support</h4>
                <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest leading-none">Typically replies instantly</p>
              </div>
            </div>

            {/* Body */}
            <div className="bg-gray-50 rounded-2xl p-4 mb-4 relative">
              <div className="absolute -left-2 top-4 w-4 h-4 bg-gray-50 rotate-45" />
              <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                Hi there! 👋 <br />
                Looking for your dream vacation? Chat with our experts for personalized itineraries!
              </p>
            </div>

            {/* Action */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-lg shadow-green-500/20 active:scale-95"
            >
              <Send className="w-4 h-4" />
              Start Chatting
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex h-16 w-16 items-center justify-center rounded-full shadow-md shadow-black/25 transition-all duration-300 ${
          isOpen ? 'bg-gray-900 text-white rotate-90' : 'bg-[#25D366] text-white'
        }`}
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
        
        {!isOpen && (
          <span
            className="pointer-events-none absolute right-1.5 top-1.5 box-border h-3 w-3 rounded-full border-2 border-white bg-brand-secondary"
            aria-hidden
          />
        )}
      </motion.button>
    </div>
  );
}
