import React from 'react';
import { Testimonial } from '../types';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialsProps {
  items: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ items }) => {
  return (
    <section className="py-24 bg-slate-900 relative">
      {/* Background accent */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Impact Reviews</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Verified feedback from the team. 100% Recommended.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < item.rating ? "currentColor" : "none"} 
                      className={i < item.rating ? "" : "text-slate-600"}
                    />
                  ))}
                </div>
                <Quote className="text-slate-600 group-hover:text-blue-400 transition-colors" size={20} />
              </div>

              <p className="text-slate-200 mb-6 leading-relaxed text-lg font-light">
                "{item.message}"
              </p>

              <div className="mt-auto border-t border-slate-700/50 pt-6 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold">{item.name}</h4>
                  <p className="text-slate-500 text-sm">{item.role}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                    {item.tags.map(tag => (
                         <span key={tag} className="text-[10px] uppercase tracking-wider bg-slate-700/50 text-slate-300 px-2 py-1 rounded-md">
                             {tag}
                         </span>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;