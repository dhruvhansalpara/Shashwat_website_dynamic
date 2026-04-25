import React from 'react';
import { Calendar, Clock, Mail, MessageSquare, Phone, Star, Users } from 'lucide-react';
import ModernDatePicker from '../../../components/shared/ModernDatePicker';
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from '../../../config/contact';

type TourBookingSidebarProps = {
  priceLabel: string;
  reviews: number;
  travelDate: string;
  guestCount: string;
  minTravelDate: string;
  whatsappUrl: string;
  onTravelDateChange: (value: string) => void;
  onGuestCountChange: (value: string) => void;
  onEnquiryClick: () => void;
};

export default function TourBookingSidebar({
  priceLabel,
  reviews,
  travelDate,
  guestCount,
  minTravelDate,
  whatsappUrl,
  onTravelDateChange,
  onGuestCountChange,
  onEnquiryClick,
}: TourBookingSidebarProps) {
  return (
    <div className="space-y-6">
      <div className="soft-card shadow-xl rounded-[2.5rem] p-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl -tr-16 -te-16"></div>

        <div className="mb-8 relative z-10">
          <div className="flex items-end gap-1 mb-2">
            <span className="text-4xl font-black text-gray-900">{priceLabel}</span>
            <span className="text-gray-400 font-bold mb-1">/ person (INR)</span>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="p-4 bg-gray-50 rounded-2xl flex items-center gap-4 border border-transparent hover:border-brand-primary/20 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
              <Calendar className="text-brand-primary w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] uppercase font-black text-gray-400 tracking-wider">Travel Date</p>
              <ModernDatePicker
                value={travelDate}
                onChange={onTravelDateChange}
                minDate={minTravelDate}
                placeholder="Select travel date"
                className="w-full rounded-lg bg-white px-3 py-2 text-sm font-black text-gray-900 shadow-inner shadow-gray-100 outline-none ring-1 ring-transparent transition focus:ring-brand-primary/35 [color-scheme:light]"
              />
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-2xl flex items-center gap-4 border border-transparent hover:border-brand-primary/20 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
              <Users className="text-brand-primary w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] uppercase font-black text-gray-400 tracking-wider">Number of Guests</p>
              <select
                value={guestCount}
                onChange={(event) => onGuestCountChange(event.target.value)}
                className="bg-transparent text-sm font-black text-gray-900 w-full outline-none border-none p-0 cursor-pointer"
              >
                <option>2 Adults, 0 Children</option>
                <option>1 Adult</option>
                <option>3 Adults</option>
                <option>4 Adults+</option>
              </select>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onEnquiryClick}
          className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-brand-primary/30 active:scale-[0.98] mb-6"
        >
          Send Enquiry
        </button>

        <div className="flex flex-col gap-4 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-3 text-gray-500 font-bold text-xs uppercase tracking-wider">
            <Clock className="w-4 h-4 text-brand-primary" />
            Instant Confirmation
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/20 rounded-full blur-[80px] group-hover:bg-brand-primary/30 transition-colors"></div>
        <h4 className="text-xl font-bold mb-6 relative z-10">Need Assistance?</h4>
        <div className="space-y-4 relative z-10">
          <a
            href={`tel:${CONTACT_PHONE_TEL}`}
            className="group/link flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-white/5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-colors group-hover/link:bg-brand-primary">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Call Anytime</p>
              <p className="font-bold">{CONTACT_PHONE_DISPLAY}</p>
            </div>
          </a>
          <a
            href={CONTACT_MAILTO}
            className="group/link flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-white/5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-colors group-hover/link:bg-brand-primary">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Send Email</p>
              <p className="break-all font-bold">{CONTACT_EMAIL}</p>
            </div>
          </a>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 mt-6 flex w-full items-center justify-center rounded-xl bg-white/10 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-white/20"
        >
          <MessageSquare className="mr-2 inline-block h-4 w-4" />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
