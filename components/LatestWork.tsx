
import React from 'react';
import { LATEST_WORK } from '../constants';

const LatestWork: React.FC = () => {
  return (
    <section className="h-full p-[32px] md:p-[48px] lg:p-[64px] overflow-hidden relative">
      {/* Background decorative elements with consistent positioning */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[80px] left-[40px] w-[256px] h-[256px] bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-[80px] right-[40px] w-[320px] h-[320px] bg-gradient-to-tl from-teal-100 to-cyan-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto h-full relative z-10">
        <div className="text-center mb-[64px]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-[32px] leading-tight">Portfolio</h2>
          <p className="text-gray-600 leading-relaxed text-lg lg:text-xl max-w-3xl mx-auto content-safe">
            A showcase of my recent content writing and social media strategy projects that have driven engagement and growth for various brands.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] lg:gap-[48px] mb-[48px] grid-consistent">
          {LATEST_WORK.map((work, index) => (
            <div key={work.id} className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-strong hover:shadow-2xl hover:shadow-cyan-500/10 transition-smooth hover-lift">
              <div className={`absolute inset-0 bg-gradient-to-br ${work.gradient} opacity-50 transition-opacity duration-300 group-hover:opacity-70`}></div>
              <img
                src={work.imageUrl}
                alt={`Project ${work.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/60 transition-smooth flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-smooth transform translate-y-4 group-hover:translate-y-0">
                  <button className="px-[24px] py-[12px] bg-white hover:bg-cyan-50 text-gray-800 hover:text-cyan-700 rounded-xl font-semibold shadow-strong hover-scale transition-smooth focus-ring border border-white/20">
                    View Project
                  </button>
                </div>
              </div>

              {/* Decorative corner elements with enhanced color psychology */}
              <div className={`absolute -top-[12px] -right-[12px] w-[24px] h-[24px] rounded-full ${index === 0 ? 'bg-gradient-to-br from-cyan-400 to-cyan-500' : index === 1 ? 'bg-gradient-to-br from-blue-400 to-blue-500' : 'bg-gradient-to-br from-teal-400 to-teal-500'} opacity-90 shadow-medium`}></div>
              <div className={`absolute -bottom-[12px] -left-[12px] w-[16px] h-[16px] rounded-full ${index === 0 ? 'bg-gradient-to-br from-blue-300 to-blue-400' : index === 1 ? 'bg-gradient-to-br from-teal-300 to-teal-400' : 'bg-gradient-to-br from-cyan-300 to-cyan-400'} opacity-70`}></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="inline-flex items-center gap-[12px] text-cyan-600 hover:text-cyan-700 font-semibold text-lg group transition-smooth focus-ring rounded-lg px-[16px] py-[8px] hover:bg-cyan-50 border border-transparent hover:border-cyan-200">
            view all projects
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-2 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
