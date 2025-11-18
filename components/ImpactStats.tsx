import React from 'react';
import { StatItem } from '../types';
import { motion } from 'framer-motion';

interface ImpactStatsProps {
  stats: StatItem[];
}

const ImpactStats: React.FC<ImpactStatsProps> = ({ stats }) => {
  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`p-4 rounded-full bg-slate-800/50 mb-4 group-hover:bg-slate-800 transition-colors ${stat.color}`}>
                <stat.icon size={32} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 font-serif">{stat.value}</h3>
              <p className="text-sm text-slate-400 uppercase tracking-wider font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;