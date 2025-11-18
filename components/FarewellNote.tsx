import React from 'react';
import { motion } from 'framer-motion';

interface FarewellNoteProps {
  title: string;
  body: string;
}

const FarewellNote: React.FC<FarewellNoteProps> = ({ title, body }) => {
  return (
    <section className="py-24 relative bg-slate-950 flex items-center justify-center">
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
       
       <div className="container mx-auto px-6 relative z-10">
         <motion.div 
           className="max-w-3xl mx-auto text-center"
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
         >
           <h2 className="font-serif text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 mb-8">
             {title}
           </h2>
           
           <div className="space-y-6 text-lg md:text-xl text-slate-300 leading-loose font-light">
             {body.split('\n').map((paragraph, idx) => (
               paragraph.trim() && <p key={idx}>{paragraph}</p>
             ))}
           </div>

           <div className="mt-12">
             <p className="text-sm text-slate-500 tracking-[0.2em] uppercase">With Gratitude,</p>
             <p className="text-white font-serif text-2xl mt-2">The Engineering Team</p>
           </div>
         </motion.div>
       </div>
    </section>
  );
};

export default FarewellNote;