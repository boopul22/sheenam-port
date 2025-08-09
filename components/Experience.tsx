
import React from 'react';
import { WORK_EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section className="h-full p-[32px] md:p-[48px] overflow-hidden">
      <div className="max-w-4xl mx-auto h-full">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-[24px] text-center leading-tight">Work Experience</h2>
        <div className="relative border-l-2 border-gray-200 pl-[40px]">
          {WORK_EXPERIENCE.map((job, index) => (
            <div key={index} className="mb-[48px] relative group">
              <div className="absolute -left-[41px] top-[6px] w-4 h-4 bg-cyan-400 rounded-full border-4 border-white transition-smooth group-hover:scale-125"></div>
              <p className="text-sm text-gray-500 mb-[8px]">{job.period}</p>
              <h3 className="font-bold text-xl text-gray-900">{job.role}</h3>
              <h4 className="text-md font-medium text-gray-600 mb-[16px]">{job.company}</h4>
              <ul className="list-disc list-outside space-y-[8px] text-gray-600 pl-[20px]">
                  {job.description.map((point, i) => (
                    <li key={i} className="content-safe">{point}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;