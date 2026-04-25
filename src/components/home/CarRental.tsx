import React from 'react';
import { motion } from 'motion/react';
import { Users, Briefcase, Settings, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cars } from '../../data/cars';
import { formatInr } from '../../utils/currency';
import SafeImage from '../shared/SafeImage';

export default function CarRental() {
  return (
    <section className="home-section-soft home-section-white py-24">
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-secondary font-black text-sm uppercase tracking-widest mb-4 block">
              Cabs & transfers
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Ahmedabad <span className="italic text-brand-primary font-medium">cab fleet</span>
              <br />
              <span className="text-2xl md:text-3xl font-black text-gray-600">Innova · Ertiga · Dzire · Hatchbacks</span>
            </h2>
          </div>
          <Link
            to="/car-rental"
            className="inline-flex items-center gap-2 group text-gray-900 font-bold hover:text-brand-primary transition-colors text-sm uppercase tracking-widest"
          >
            View all cabs
            <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.slice(0, 4).map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-50 rounded-[40px] p-2 border border-gray-200/90 hover:border-gray-300 hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-56 rounded-[32px] overflow-hidden mb-6 border border-gray-200/80 bg-gray-50">
                <SafeImage
                  src={car.image}
                  alt={car.model}
                  className="h-full w-full min-h-56 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold text-gray-900 tracking-widest">
                    {car.type}
                  </span>
                </div>
              </div>

              <div className="px-6 pb-8">
                {/* Rating removed as per user request */}
                
                <h3 className="text-xl font-black text-gray-900 mb-6 group-hover:text-brand-primary transition-colors leading-tight">
                  {car.model}
                </h3>

                <div className="grid grid-cols-3 gap-4 mb-8 py-4 border-y border-gray-100">
                  <div className="flex flex-col items-center gap-1">
                    <Users className="w-4 h-4 text-brand-primary" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase">{car.seats} Seats</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Briefcase className="w-4 h-4 text-brand-primary" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase">{car.bags} Bags</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Settings className="w-4 h-4 text-brand-primary" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase truncate w-full text-center">
                      {car.transmission}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter block mb-1">
                      From (INR/km)
                    </span>
                    <p className="text-2xl font-black text-gray-900 leading-none">
                      {formatInr(car.pricePerKm)}
                      <span className="text-sm font-bold text-gray-400">/km</span>
                    </p>
                  </div>
                  <Link
                    to="/car-rental"
                    className="h-12 px-6 inline-flex items-center justify-center bg-gray-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-brand-primary transition-colors active:scale-95"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
