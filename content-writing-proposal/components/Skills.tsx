import React from 'react';
import { SKILLS, OTHER_CARDS } from '../constants';
import type { Skill, OtherCard } from '../types';

const SkillCard: React.FC<{skill: Skill}> = ({ skill }) => {
    const Icon = skill.icon;
    return (
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-6 rounded-2xl border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 group backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-slate-700 to-slate-600 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 shadow-lg">
                    <Icon />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-100 transition-colors duration-300">{skill.name}</h3>
            </div>
            <p className="text-slate-200 text-sm leading-relaxed group-hover:text-slate-100 transition-colors duration-300">{skill.description}</p>
        </div>
    );
};

const OtherInfoCard: React.FC<{ card: OtherCard }> = ({ card }) => {
    const Icon = card.icon;
    return (
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-6 rounded-2xl border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 group backdrop-blur-sm">
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-slate-700 to-slate-600 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 shadow-lg">
                    <Icon />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-100 transition-colors duration-300 mb-2">{card.title}</h3>
                  <p className="text-slate-200 text-sm leading-relaxed group-hover:text-slate-100 transition-colors duration-300">{card.description}</p>
                </div>
            </div>
        </div>
    );
};

export const Skills: React.FC = () => {
  return (
    <section>
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-12 font-display">Skills & Capacity</h2>
      <div className="max-w-6xl mx-auto">
        {/* Skills Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {SKILLS.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
            ))}
        </div>

        {/* Capacity Cards - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {OTHER_CARDS.map((card, index) => (
                <OtherInfoCard key={index} card={card} />
            ))}
        </div>
      </div>
    </section>
  );
};
