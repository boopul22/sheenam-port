
import React from 'react';
import { PORTFOLIO_LINKS } from '../constants';
import { ArrowUpRightIcon } from './Icons';

export const Portfolio: React.FC = () => {
  return (
    <section>
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-4 font-display">Proven Experience</h2>
      <p className="text-center text-lg text-slate-200 max-w-3xl mx-auto mb-12 leading-relaxed">I have written multiple SEO-optimized blogs and content for visa, immigration, and travel companies. Here are a few samples of my work.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {PORTFOLIO_LINKS.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 sm:p-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl border border-slate-600/50 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-100 transition-colors duration-300">{item.title}</h3>
              <ArrowUpRightIcon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
            <p className="text-slate-200 group-hover:text-slate-100 transition-colors duration-300 leading-relaxed">{item.description}</p>
            <div className="mt-4 pt-4 border-t border-slate-600/30 group-hover:border-cyan-500/30 transition-colors duration-300">
              <span className="text-xs text-cyan-400 font-medium">View Sample →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
