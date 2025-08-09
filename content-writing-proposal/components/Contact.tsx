
import React from 'react';
import { EmailIcon, PhoneIcon } from './Icons';

export const Contact: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-slate-900 to-slate-800/50 border-t border-slate-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-display">Ready to Start?</h2>
        <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          I am open to completing a paid trial assignment to demonstrate my writing quality. Let's create content that resonates.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
          <a
            href="mailto:sheenammiddha.19@gmail.com"
            className="inline-flex items-center justify-center gap-3 text-lg font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 transition-all duration-300 px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 transform hover:-translate-y-1"
          >
            <EmailIcon className="w-6 h-6" />
            <span>Email Me</span>
          </a>
          <div className="flex items-center gap-3 text-lg font-semibold text-slate-100 bg-slate-700/30 px-6 py-3 rounded-full border border-slate-600/50">
            <PhoneIcon className="w-6 h-6 text-cyan-400" />
            <span>+91 99884 41561</span>
          </div>
        </div>
      </div>
      <div className="text-center py-4 border-t border-slate-700/50">
          <p className="text-sm text-slate-400">Designed & Built by an AI Assistant</p>
      </div>
    </footer>
  );
};
