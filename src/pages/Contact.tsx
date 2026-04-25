import React from 'react';
import { Mail, Phone, MapPin, Send, Globe, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from '../config/contact';

export default function ContactPage() {
  return (
    <div className="page-shell pt-32 pb-24">
      <div className="site-container">
        <div className="text-center mb-20">
          <span className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-4 block">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-black text-gray-900 tracking-tight mb-6">
            Ready to <span className="italic text-brand-primary">Start Your Journey?</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Have questions about a destination or need help with a booking? Our expert travel consultants are here to help you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="soft-card rounded-[32px] p-7 xl:p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary text-white">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 italic">Call Us Directly</h4>
              <p className="text-gray-500 mb-4">Monday - Sunday: 9am to 9pm</p>
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="block text-[1.9rem] leading-none font-black text-gray-900 transition-opacity hover:opacity-80 xl:text-2xl"
              >
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>

            <div className="soft-card rounded-[32px] p-7 xl:p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary text-white">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 italic">Email Inquiry</h4>
              <p className="text-gray-500 mb-4">Response time: as soon as possible</p>
              <a
                href={CONTACT_MAILTO}
                className="block whitespace-nowrap text-[1.35rem] font-black leading-tight text-gray-900 underline-offset-2 transition-opacity hover:opacity-80 xl:text-[1.45rem]"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="soft-card rounded-[32px] p-7 xl:p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 italic">Visit Our Office</h4>
              <p className="leading-relaxed text-gray-700">{CONTACT_ADDRESS}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="soft-card w-full max-w-[62rem] rounded-[48px] p-8 md:p-12 shadow-2xl">
              <h3 className="text-3xl font-black text-gray-900 mb-8">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2">First Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane" 
                      className="w-full bg-gray-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-brand-primary transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="jane@example.com" 
                      className="w-full bg-gray-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-brand-primary transition-all font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2">Subject</label>
                  <input 
                    type="text" 
                    placeholder="How can we help you?" 
                    className="w-full bg-gray-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-brand-primary transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2">Your Message</label>
                  <textarea 
                    rows={6} 
                    placeholder="Tell us everything..." 
                    className="w-full bg-gray-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-brand-primary transition-all font-medium resize-none"
                  ></textarea>
                </div>
                <button className="w-full md:w-auto bg-brand-primary hover:opacity-90 text-white px-12 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-brand-primary/30 flex items-center justify-center gap-3 active:scale-95">
                  <Send className="w-5 h-5" />
                  Send Message Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
