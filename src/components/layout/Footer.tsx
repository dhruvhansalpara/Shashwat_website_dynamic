import React from 'react';
import { Send, Globe, Facebook, Twitter, Instagram, Linkedin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SHASHWAT_INSTAGRAM_URL } from '../../config/social';
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from '../../config/contact';
import { BRAND_LOGO_PATH } from '../../config/branding';

export default function Footer() {
  return (
    <footer className="relative z-[60] isolate bg-brand-dark text-white pt-24 pb-12">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* About */}
          <div>
            <Link to="/" className="inline-flex items-center mb-8 rounded-lg bg-white p-2 shadow-xl border border-white/5 transition-transform hover:scale-[1.02]">
              <img
                src={BRAND_LOGO_PATH}
                alt="Shashwat Holidays"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed font-medium">
              Shashwat is a premium travel agency dedicated to providing curated local experiences and luxury escapes worldwide.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Facebook className="w-5 h-5" />} label="Shashwat Holidays on Facebook" />
              <SocialIcon icon={<Twitter className="w-5 h-5" />} label="Shashwat Holidays on Twitter" />
              <SocialIcon icon={<Instagram className="w-5 h-5" />} label="Shashwat Holidays on Instagram" />
              <SocialIcon icon={<Linkedin className="w-5 h-5" />} label="Shashwat Holidays on LinkedIn" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black mb-8 uppercase tracking-widest text-brand-primary">Quick Links</h4>
            <ul className="space-y-4 font-bold uppercase text-xs tracking-wider">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/tours">Our Packages</FooterLink>
              <FooterLink to="/destinations">Destinations</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-black mb-8 uppercase tracking-widest text-brand-secondary">Customer Support</h4>
            <ul className="space-y-4 font-bold uppercase text-xs tracking-wider">
              <FooterLink to="/help-center">Help Center</FooterLink>
              <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
              <FooterLink to="/refund-policy">Refund Policy</FooterLink>
              <FooterLink to="/faq">FAQ</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-black mb-8 uppercase tracking-widest text-brand-accent">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase mb-1 tracking-widest">Office Location</p>
                  <p className="text-sm font-medium leading-relaxed text-gray-300">{CONTACT_ADDRESS}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase mb-1 tracking-widest">Phone</p>
                  <a
                    href={`tel:${CONTACT_PHONE_TEL}`}
                    className="text-sm font-medium text-gray-300 underline-offset-2 hover:text-brand-primary hover:underline"
                  >
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Send className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase mb-1 tracking-widest">Email Address</p>
                  <a
                    href={CONTACT_MAILTO}
                    className="text-sm font-medium text-gray-300 break-all underline-offset-2 hover:text-brand-primary hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-center text-sm text-gray-500">
            © 2026 <span className="font-bold text-brand-primary">Shashwat Holidays</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <a
      href={SHASHWAT_INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-white transition-all"
    >
      {icon}
    </a>
  );
}

function FooterLink({ children, to = "#" }: { children: React.ReactNode; to?: string }) {
  return (
    <li>
      <Link to={to} className="text-gray-400 transition-colors hover:text-brand-primary">
        {children}
      </Link>
    </li>
  );
}
