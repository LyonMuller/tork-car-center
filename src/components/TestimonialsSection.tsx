import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function TestimonialsSection() {
  // Safe state to hold images that loaded successfully
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="depoimentos" className="py-24 bg-neutral-950 relative border-t border-neutral-900 overflow-hidden">
      {/* Visual glowing accent background */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#dc2626]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 mb-4 bg-neutral-900 border-l-4 border-[#dc2626] text-[10px] uppercase font-bold tracking-widest text-[#dc2626] rounded-sm">
            Opinião de Quem Confia
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase italic tracking-tighter">
            O que nossos clientes dizem
          </h2>
          <p className="text-neutral-400 mt-3 text-sm font-sans">
            A satisfação e a tranquilidade de quem traz o carro para a Tork Car Center em Joinville é o nosso principal objetivo.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="testimonials-grid-container">
          {TESTIMONIALS_DATA.map((testimonial, index) => {
            const hasImage = testimonial.avatarUrl && !failedImages[testimonial.id];
            
            return (
              <motion.div
                key={testimonial.id}
                id={`testimonial-card-${testimonial.id}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-neutral-900 border border-neutral-800/80 p-6 md:p-8 rounded-sm relative flex flex-col justify-between hover:border-[#dc2626]/40 transition-colors duration-300 group"
              >
                {/* Quote Icon decorative backdrop */}
                <div className="absolute top-6 right-6 text-neutral-800 group-hover:text-[#dc2626]/10 transition-colors duration-300 pointer-events-none">
                  <Quote className="h-8 w-8 stroke-[1.5]" />
                </div>

                {/* Stars and Content */}
                <div className="space-y-4">
                  {/* Star row */}
                  <div className="flex items-center gap-1" id={`testimonial-stars-${testimonial.id}`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4 fill-[#dc2626] text-[#dc2626] shrink-0" 
                      />
                    ))}
                  </div>

                  {/* Feedback quote */}
                  <blockquote className="text-neutral-200 text-sm md:text-base leading-relaxed italic font-sans">
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                {/* Customer Bio Profile Row */}
                <div className="mt-8 pt-6 border-t border-neutral-950 flex items-center gap-4">
                  {/* Avatar section */}
                  <div className="relative shrink-0" id={`testimonial-avatar-wrapper-${testimonial.id}`}>
                    {hasImage ? (
                      <img
                        src={testimonial.avatarUrl}
                        alt={testimonial.name}
                        onError={() => handleImageError(testimonial.id)}
                        referrerPolicy="no-referrer"
                        className="h-12 w-12 rounded-sm object-cover border border-neutral-800 filter brightness-90 grayscale group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-305"
                      />
                    ) : (
                      <div className="h-12 w-12 rounded-sm bg-neutral-850 border border-neutral-800 text-red-500 flex items-center justify-center font-bold font-mono text-sm uppercase">
                        {testimonial.avatarFallback}
                      </div>
                    )}
                  </div>

                  {/* Name and vehicle details */}
                  <div className="flex flex-col min-w-0">
                    <cite className="not-italic text-sm font-bold text-white uppercase tracking-wide group-hover:text-[#dc2626] transition-colors duration-300">
                      {testimonial.name}
                    </cite>
                    <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mt-0.5 truncate">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
