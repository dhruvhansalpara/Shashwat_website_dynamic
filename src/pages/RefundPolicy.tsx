import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { RefreshCcw, Clock, CreditCard, HelpCircle } from 'lucide-react';

export default function RefundPolicyPage() {
  return (
    <div className="page-shell min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Refund Policy | Shashwat Holidays</title>
        <meta name="description" content="Read our clear and transparent refund policy for tour bookings and car rentals." />
      </Helmet>

      <div className="site-container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-brand-accent font-black text-sm uppercase tracking-widest mb-4 block">
            Clear & Transparent
          </span>
          <h1 className="text-5xl font-display font-black text-gray-900 tracking-tight mb-6">
            Refund <span className="italic text-brand-accent">Policy</span>
          </h1>
          <p className="text-gray-500 text-lg">
            Ensuring a fair process for every traveler.
          </p>
        </motion.div>

        <div className="space-y-12 text-gray-700 leading-relaxed">
          <section className="soft-card p-10 rounded-[2rem] border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                <RefreshCcw className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">Overview</h2>
            </div>
            <p>
              We understand that plans can change. Our refund policy is designed to provide clarity on how cancellations are handled for different types of bookings made through Shashwat Holidays.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">Tour Packages</h3>
              <ul className="space-y-3 text-sm">
                <li><span className="font-bold">30+ Days Before:</span> 90% Refund</li>
                <li><span className="font-bold">15-30 Days Before:</span> 50% Refund</li>
                <li><span className="font-bold">Less than 15 Days:</span> Non-refundable</li>
              </ul>
              <p className="mt-4 text-[10px] text-gray-400 uppercase font-bold tracking-widest italic">*Varies for international cruises and high-season bookings.</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-6">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">Car Rentals</h3>
              <ul className="space-y-3 text-sm">
                <li><span className="font-bold">48+ Hours Before:</span> Full Refund</li>
                <li><span className="font-bold">24-48 Hours Before:</span> 50% Refund</li>
                <li><span className="font-bold">Less than 24 Hours:</span> One-day rental charge</li>
              </ul>
            </div>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">Processing Timelines</h2>
            <p>
              Approved refunds are typically processed within 7 to 10 business days. The actual time it takes for the funds to appear in your account depends on your bank or credit card issuer's internal processes.
            </p>
          </section>

          <section className="bg-brand-accent/5 p-10 rounded-[2rem] border border-brand-accent/10">
            <div className="flex gap-4 items-start">
              <HelpCircle className="w-6 h-6 text-brand-accent shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-black text-gray-900 mb-2">Need a special exemption?</h2>
                <p className="text-sm">In cases of medical emergencies or extreme unforeseen circumstances, please provide supporting documentation. We evaluate these instances on a case-by-case basis with our service partners.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
