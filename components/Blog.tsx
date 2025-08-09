
import React from 'react';

const Blog: React.FC = () => {
  return (
    <section className="h-full p-[32px] md:p-[48px] overflow-hidden">
      <div className="max-w-4xl mx-auto h-full flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-[24px] text-center leading-tight">My Blog</h2>
        <p className="text-gray-600 leading-relaxed mb-[32px] max-w-2xl mx-auto text-center content-safe">
          Sharing insights, tips, and experiences from my journey in content writing and social media strategy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] mb-[32px] grid-consistent">
          <div className="bg-white rounded-xl shadow-medium p-[24px] border border-gray-100 hover-lift transition-smooth">
            <div className="w-full h-[192px] bg-gradient-to-br from-blue-200 to-cyan-200 rounded-lg mb-[16px]"></div>
            <h3 className="text-xl font-bold text-gray-800 mb-[8px]">Content Strategy Tips</h3>
            <p className="text-gray-600 text-sm mb-[16px] content-safe">Coming soon - Essential strategies for creating engaging content that converts...</p>
            <span className="text-xs text-gray-400">Blog post in progress</span>
          </div>

          <div className="bg-white rounded-xl shadow-medium p-[24px] border border-gray-100 hover-lift transition-smooth">
            <div className="w-full h-[192px] bg-gradient-to-br from-purple-200 to-indigo-200 rounded-lg mb-[16px]"></div>
            <h3 className="text-xl font-bold text-gray-800 mb-[8px]">SEO Best Practices</h3>
            <p className="text-gray-600 text-sm mb-[16px] content-safe">Coming soon - How to improve your search rankings with proven SEO techniques...</p>
            <span className="text-xs text-gray-400">Blog post in progress</span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-500">Stay tuned for valuable content and industry insights!</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
