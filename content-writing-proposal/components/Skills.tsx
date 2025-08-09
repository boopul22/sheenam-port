import React from 'react';
import { SKILLS, OTHER_CARDS } from '../constants';
import type { Skill, OtherCard } from '../types';

const SkillCard: React.FC<{skill: Skill}> = ({ skill }) => {
    const Icon = skill.icon;
    return (
        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-700 text-cyan-400"><Icon /></div>
                <h3 className="text-lg font-bold text-white">{skill.name}</h3>
            </div>
            <p className="text-slate-400 text-sm">{skill.description}</p>
        </div>
    );
};

const OtherInfoCard: React.FC<{ card: OtherCard }> = ({ card }) => {
    const Icon = card.icon;
    return (
        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-slate-700 text-cyan-400"><Icon /></div>
            <div>
              <h3 className="text-lg font-bold text-white">{card.title}</h3>
              <p className="text-slate-400 text-sm">{card.description}</p>
            </div>
        </div>
    );
};

export const Skills: React.FC = () => {
  return (
    <section>
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-12 font-display">Skills & Capacity</h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {SKILLS.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
            ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OTHER_CARDS.map((card, index) => (
                <OtherInfoCard key={index} card={card} />
            ))}
        </div>
      </div>
    </section>
  );
};
