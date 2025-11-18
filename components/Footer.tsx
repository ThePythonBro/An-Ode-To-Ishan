import React from 'react';
import { Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
        <div className="flex items-center gap-2">
          <span>Built with</span>
          <Heart size={14} className="text-red-500 fill-red-500" />
          <span>using React & Tailwind</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">View on GitHub</a>
          <Github size={16} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;