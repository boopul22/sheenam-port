
import React from 'react';
// import { LATEST_WORK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="h-full flex relative overflow-hidden">
      {/* Background decorative elements with consistent positioning */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle background pattern */}
        <div className="absolute top-0 right-0 w-[384px] h-[384px] bg-gradient-to-bl from-gray-50 to-transparent opacity-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[256px] h-[256px] bg-gradient-to-tr from-cyan-50 to-transparent opacity-30 rounded-full blur-2xl"></div>
      </div>

      {/* Left Side: Large Vertical Name with consistent spacing - Hidden on mobile */}
      <div className="relative flex-shrink-0 w-[144px] lg:w-[176px] xl:w-[192px] hidden lg:flex items-center justify-center z-10">
        <div className="absolute left-[16px] top-1/2 -translate-y-1/2">
          <span className="writing-vertical-rl text-xs text-gray-400 tracking-widest uppercase font-medium">
            download cv
          </span>
        </div>
        <div className="absolute left-[32px] lg:left-[48px] top-1/2 -translate-y-1/2">
          <span className="writing-vertical-rl text-xs text-gray-400 tracking-widest uppercase font-medium">
            client reviews
          </span>
        </div>
        <div className="absolute left-[64px] lg:left-[80px] xl:left-[96px] top-1/2 -translate-y-1/2">
          <span className="writing-vertical-rl text-xs text-gray-400 tracking-widest uppercase font-medium">
            my process
          </span>
        </div>
        <h1 className="text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-gray-800 uppercase writing-vertical-rl tracking-wider select-none">
          sheenam
        </h1>
      </div>

      {/* Center: Main Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row relative">
        {/* Profile Image and Why Me Section with consistent spacing */}
        <div className="flex-1 p-[32px] lg:p-[48px] xl:p-[64px] flex flex-col lg:flex-row items-center gap-[48px] lg:gap-[64px] relative">
          {/* Profile Image with Enhanced Background */}
          <div className="relative flex-shrink-0">
            {/* Large prominent cyan background shape with responsive dimensions */}
            <div className="absolute -top-[16px] -left-[16px] sm:-top-[24px] sm:-left-[24px] lg:-top-[32px] lg:-left-[32px] w-[280px] h-[360px] sm:w-[320px] sm:h-[400px] lg:w-[420px] lg:h-[520px] xl:w-[480px] xl:h-[580px] bg-gradient-to-br from-cyan-300 to-cyan-400 rounded-[24px] sm:rounded-[32px] lg:rounded-[48px] transform rotate-3 opacity-80"></div>

            {/* Secondary background elements - scaled for mobile */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] lg:w-[200px] lg:h-[200px] bg-gradient-to-bl from-blue-200 to-cyan-200 rounded-full blur-xl opacity-60"></div>
            <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px] bg-gradient-to-tr from-teal-200 to-cyan-300 rounded-full blur-lg opacity-50"></div>

            <img
              src="https://i.imgur.com/N28aCSY.png"
              alt="Sheenam Middha"
              className="relative z-10 w-[250px] h-[320px] sm:w-[280px] sm:h-[350px] lg:w-[340px] lg:h-[420px] xl:w-[380px] xl:h-[460px] object-cover rounded-xl sm:rounded-2xl shadow-2xl shadow-cyan-500/20"
            />
          </div>

          {/* Why Me Content with enhanced typography hierarchy */}
          <div className="flex-1 max-w-xl relative">
            {/* Mobile-first title for small screens */}
            <div className="lg:hidden text-center mb-6">
              <h1 className="text-3xl sm:text-4xl font-black text-black leading-tight tracking-tight mb-2">
                sheenam
              </h1>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Content Creator & Marketing Strategist</p>
            </div>

            <div className="absolute -top-[32px] -right-[32px] hidden xl:block">
              <span className="writing-vertical-rl text-xs text-gray-400 tracking-widest uppercase font-medium">
                missed advice my h sister
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-black mb-[20px] sm:mb-[32px] leading-tight text-center lg:text-left">
              Why <span className="text-cyan-600 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-[16px] sm:mb-[24px] text-base sm:text-lg content-safe text-center lg:text-left">
              Creative and results-driven Content Writer and Social Media Strategist with over 4 years of experience, adept at producing high-quality, engaging content that informs and captivates audiences.
            </p>
            <p className="text-gray-700 leading-relaxed mb-[24px] sm:mb-[40px] text-sm sm:text-base lg:text-lg content-safe text-center lg:text-left">
              Successfully improved search engine ranking by <span className="font-semibold text-green-700 bg-green-50 px-[6px] py-[2px] sm:px-[8px] rounded-md">35X</span> through compelling SEO content and significantly increased social media followers by <span className="font-semibold text-green-700 bg-green-50 px-[6px] py-[2px] sm:px-[8px] rounded-md">25-30X</span>, driving substantial brand awareness and audience engagement.
            </p>

            <div className="text-center lg:text-left">
              <button className="w-full sm:w-auto px-[24px] sm:px-[32px] py-[14px] sm:py-[16px] bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-smooth hover-lift shadow-lg hover:shadow-xl shadow-cyan-500/25 focus-ring text-base sm:text-lg min-h-[48px]">
                schedule a call
              </button>
            </div>
          </div>
        </div>

        {/* Right Side panel removed per request */}
      </div>
    </section>
  );
};

export default Hero;