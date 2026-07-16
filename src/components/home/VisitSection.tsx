"use client";

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Facebook } from 'lucide-react';
import { BUSINESS_INFO } from '../../lib/constants';

export default function VisitSection() {
  return (
    <section id="visit" className="py-20 bg-transparent relative border-t border-[#2C1E16]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block w-fit bg-[#C84B31]/10 text-[#C84B31] font-bold px-4 py-1 rounded-full text-sm tracking-wide mb-4"
          >
            VISIT US
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-serif font-bold text-[#2C1E16] drop-shadow-sm"
          >
            Stop By & Say Hello
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-[#2C1E16]/5">
          
          {/* Map Embed */}
          <div className="h-[400px] lg:h-auto w-full relative bg-gray-100">
            <iframe 
              src={BUSINESS_INFO.mapEmbedUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>

          {/* Contact Details */}
          <div className="p-8 sm:p-12 flex flex-col justify-center space-y-8 relative z-10">
            <h3 className="text-2xl font-serif font-bold text-[#2C1E16] mb-2">{BUSINESS_INFO.name}</h3>
            
            <div className="space-y-6">
              
              <div className="flex items-start gap-4 group">
                <div className="bg-[#2C1E16]/5 p-3 rounded-full text-[#C84B31] group-hover:bg-[#C84B31]/10 transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#2C1E16] text-lg">Location</h4>
                  <p className="text-[#2C1E16]/70 mt-1">{BUSINESS_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-[#2C1E16]/5 p-3 rounded-full text-[#C84B31] group-hover:bg-[#C84B31]/10 transition-colors">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#2C1E16] text-lg">Opening Hours</h4>
                  <p className="text-[#2C1E16]/70 mt-1">{BUSINESS_INFO.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-[#2C1E16]/5 p-3 rounded-full text-[#C84B31] group-hover:bg-[#C84B31]/10 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#2C1E16] text-lg">Contact</h4>
                  <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`} className="text-[#2C1E16]/70 mt-1 hover:text-[#C84B31] transition-colors block">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="bg-[#2C1E16]/5 p-3 rounded-full text-[#1877F2] group-hover:bg-[#1877F2]/10 transition-colors">
                  <Facebook className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#2C1E16] text-lg">Social Media</h4>
                  <a href={BUSINESS_INFO.social.facebookUrl} target="_blank" rel="noreferrer" className="text-[#2C1E16]/70 mt-1 hover:text-[#1877F2] transition-colors block">
                    Follow us on Facebook
                  </a>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
