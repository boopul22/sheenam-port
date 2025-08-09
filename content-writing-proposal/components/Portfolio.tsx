
import React from 'react';
import { PORTFOLIO_LINKS } from '../constants';
import { ArrowUpRightIcon } from './Icons';

export const Portfolio: React.FC = () => {
  return (
    <section>
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-4 font-display">Proven Experience</h2>
      <p className="text-center text-lg text-slate-400 max-w-3xl mx-auto mb-12">I have written multiple SEO-optimized blogs and content for visa, immigration, and travel companies. Here are a few samples of my work.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {PORTFOLIO_LINKS.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-8 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-cyan-500 hover:bg-slate-800 transition-all duration-300"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <ArrowUpRightIcon className="w-6 h-6 text-slate-500 group-hover:text-cyan-400 transition-colors duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
            <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{item.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};
