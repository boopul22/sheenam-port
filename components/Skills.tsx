
import React from 'react';
import { SKILL_CATEGORIES, TOOL_CATEGORIES } from '../constants';

const InfoCard = ({ title, items }: { title: string, items: string[] }) => (
  <div className="bg-white rounded-lg sm:rounded-xl shadow-medium p-[16px] sm:p-[20px] lg:p-[24px] transition-smooth hover:shadow-xl hover:-translate-y-1 border border-gray-100 h-full">
    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-[12px] sm:mb-[16px]">{title}</h3>
    <ul className="space-y-[8px] sm:space-y-[12px]">
      {items.map((item) => (
        <li key={item} className="flex items-center text-gray-600">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-[8px] sm:mr-[12px] text-cyan-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <span className="font-medium text-sm sm:text-base">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);


const Skills: React.FC = () => {
  return (
    <section className="h-full p-[16px] sm:p-[24px] md:p-[32px] lg:p-[48px] overflow-hidden">
      <div className="max-w-6xl mx-auto h-full">
        <div className="text-center mb-[16px] sm:mb-[20px] lg:mb-[24px]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-[12px] sm:mb-[16px] leading-tight">Skills & Tools</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto content-safe px-4">
              A showcase of the primary skills and tools I leverage to create effective content and marketing strategies.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] sm:gap-[24px] lg:gap-[32px]">
          {/* Skills Column */}
          <div className="space-y-[16px] sm:space-y-[24px] lg:space-y-[32px]">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-[16px] sm:mb-[20px] lg:mb-[24px]">Skills</h3>
              {SKILL_CATEGORIES.map(category => (
                  <InfoCard key={category.title} title={category.title} items={category.skills} />
              ))}
          </div>

          {/* Tools Column */}
          <div className="space-y-[16px] sm:space-y-[24px] lg:space-y-[32px]">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-[16px] sm:mb-[20px] lg:mb-[24px]">Tools</h3>
              {TOOL_CATEGORIES.map(category => (
                  <InfoCard key={category.title} title={category.title} items={category.tools} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;