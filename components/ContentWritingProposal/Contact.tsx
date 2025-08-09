
import React from 'react';
import { EmailIcon, PhoneIcon } from './Icons';

export const Contact: React.FC = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-display">Ready to Start?</h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
          I am open to completing a paid trial assignment to demonstrate my writing quality. Let's create content that resonates.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
          <a
            href="mailto:sheenammiddha.19@gmail.com"
            className="inline-flex items-center justify-center gap-3 text-lg font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors duration-300 px-8 py-3 rounded-full shadow-lg"
          >
            <EmailIcon className="w-6 h-6" />
            <span>Email Me</span>
          </a>
          <div className="flex items-center gap-3 text-lg font-semibold text-slate-300">
            <PhoneIcon className="w-6 h-6 text-cyan-400" />
            <span>+91 99884 41561</span>
          </div>
        </div>
      </div>
      <div className="text-center py-4 border-t border-slate-800">
          <p className="text-sm text-slate-500">Designed & Built by an AI Assistant</p>
      </div>
    </footer>
  );
};
