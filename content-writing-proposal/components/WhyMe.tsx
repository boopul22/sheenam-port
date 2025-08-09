
import React from 'react';
import { WHY_CHOOSE_ME_POINTS } from '../constants';
import { CheckCircleIcon } from './Icons';

export const WhyMe: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-cyan-900/50 to-slate-800/50 rounded-2xl p-8 sm:p-12 border border-slate-700 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-display">Why Choose Me?</h2>
        <p className="text-slate-200 text-lg mb-8 leading-relaxed">Partner with a writer dedicated to quality, precision, and results.</p>
        <ul className="space-y-4 text-left max-w-lg mx-auto">
          {WHY_CHOOSE_ME_POINTS.map((point, index) => (
            <li key={index} className="flex items-start bg-slate-700/20 p-4 rounded-lg border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300 group">
              <CheckCircleIcon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 flex-shrink-0 mr-3 mt-1 transition-colors duration-300" />
              <span className="text-slate-100 group-hover:text-white transition-colors duration-300 leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
