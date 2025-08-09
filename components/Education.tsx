
import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section className="h-full p-[32px] md:p-[48px] overflow-hidden">
      <div className="max-w-4xl mx-auto h-full">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-[24px] text-center leading-tight">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="bg-white p-[24px] rounded-xl shadow-medium transition-smooth hover:shadow-xl hover:-translate-y-1 border border-gray-100">
              <h3 className="text-xl font-bold text-black">{edu.degree}</h3>
              <p className="text-lg text-gray-700 mt-[8px]">{edu.university}</p>
              <p className="text-md text-gray-500 mt-[12px]">{edu.years}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;