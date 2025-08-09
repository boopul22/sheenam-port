
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="relative py-24 sm:py-32 bg-slate-900 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-700/[0.2] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <img 
                src="https://picsum.photos/seed/sheenam/128/128" 
                alt="Sheenam Middha" 
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-slate-700 shadow-lg"
            />
            <p className="text-cyan-400 font-bold tracking-widest mb-2">SHEENAM MIDDHA</p>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 font-display">Content Writing Proposal</h1>
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300">
                Crafting compelling narratives, SEO-driven articles, and persuasive documents that connect with your audience and deliver results.
            </p>
        </div>
    </header>
  );
};
