
import React from 'react';
import { WHY_CHOOSE_ME_POINTS } from '../constants';
import { CheckCircleIcon } from './Icons';

export const WhyMe: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-cyan-900/50 to-slate-800/50 rounded-2xl p-8 sm:p-12 border border-slate-700 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-display">Why Choose Me?</h2>
        <p className="text-slate-300 text-lg mb-8">Partner with a writer dedicated to quality, precision, and results.</p>
        <ul className="space-y-4 text-left max-w-md mx-auto">
          {WHY_CHOOSE_ME_POINTS.map((point, index) => (
            <li key={index} className="flex items-start">
              <CheckCircleIcon className="w-6 h-6 text-cyan-400 flex-shrink-0 mr-3 mt-1" />
              <span className="text-slate-300">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
