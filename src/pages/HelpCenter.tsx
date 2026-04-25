import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { MessageCircle, Phone, Mail, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_MAILTO, CONTACT_PHONE_TEL } from '../config/contact';

export default function HelpCenterPage() {
  return (
    <div className="page-shell min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Help Center | Shashwat Holidays</title>
        <meta name="description" content="Get help with your bookings, car rentals, and travel planning. Find contact info and FAQs." />
      </Helmet>

      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-brand-primary font-black text-sm uppercase tracking-widest mb-4 block">
            We're Here to Help
          </span>
          <h1 className="text-5xl font-display font-black text-gray-900 tracking-tight">
            Knowledge <span className="italic text-brand-primary">& Support</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <HelpCard 
            icon={<MessageCircle className="w-8 h-8" />}
            title="Chat with Us"
            description="Our travel experts are available on WhatsApp for quick queries."
            actionText="Start Chat"
            href="https://wa.me/919876543210"
            color="bg-green-500"
          />
          <HelpCard 
            icon={<Phone className="w-8 h-8" />}
            title="Call Support"
            description="Need immediate assistance? Give us a call directly."
            actionText={CONTACT_PHONE_DISPLAY}
            href={`tel:${CONTACT_PHONE_TEL}`}
            color="bg-brand-primary"
          />
          <HelpCard 
            icon={<Mail className="w-8 h-8" />}
            title="Email Tickets"
            description="For complex issues or booking modifications, send an email."
            actionText="Send Email"
            href={CONTACT_MAILTO}
            color="bg-brand-secondary"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Common Topics</h2>
            <div className="space-y-4">
              <TopicLink to="/faq" title="Cancellation & Refunding" />
              <TopicLink to="/faq" title="Booking Confirmation Flow" />
              <TopicLink to="/car-rental" title="Car Fleet and Pricing" />
              <TopicLink to="/about" title="Our Company & Values" />
            </div>
          </div>
          <div className="bg-gray-100 rounded-[3rem] p-12 text-center overflow-hidden relative group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2015&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-20" />
            <div className="relative z-10">
              <HelpCircle className="w-16 h-16 text-brand-primary mx-auto mb-6" />
              <h3 className="text-2xl font-black text-gray-900 mb-4">Can't find what you're looking for?</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">Our contact page has a dedicated form for all types of inquiries.</p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-gray-900 text-white font-black uppercase text-xs tracking-widest px-10 py-5 rounded-full transition-all hover:bg-brand-primary shadow-xl"
              >
                Go to Contact Page
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HelpCard({ icon, title, description, actionText, href, color }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  actionText: string;
  href: string;
  color: string;
}) {
  return (
    <div className="soft-card p-10 rounded-[3rem] border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl transition-all">
      <div className={`w-20 h-20 rounded-3xl ${color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-black text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-500 mb-8 text-sm leading-relaxed">{description}</p>
      <a 
        href={href}
        className={`w-full py-4 px-6 rounded-2xl border-2 border-gray-100 text-xs font-black uppercase tracking-widest text-gray-700 hover:border-brand-primary hover:text-brand-primary transition-all`}
      >
        {actionText}
      </a>
    </div>
  );
}

function TopicLink({ to, title }: { to: string; title: string }) {
  return (
    <Link 
      to={to} 
      className="flex items-center justify-between p-6 rounded-2xl border border-gray-100 hover:border-brand-primary hover:bg-brand-primary/5 transition-all group"
    >
      <span className="font-bold text-gray-700 group-hover:text-brand-primary">{title}</span>
      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
    </Link>
  );
}
