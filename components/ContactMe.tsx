
import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';

const ContactMe: React.FC = () => {
  return (
    <section className="h-full p-[16px] sm:p-[24px] md:p-[32px] lg:p-[48px] text-center overflow-hidden flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-[12px] sm:mb-[16px] leading-tight">Get In Touch</h2>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-[24px] sm:mb-[32px] max-w-2xl mx-auto content-safe px-4">
          Have a project in mind or just want to say hello? I'd love to hear from you. Feel free to reach out via email, phone, or connect with me on LinkedIn.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-[24px] sm:gap-[32px] lg:gap-[64px]">
          <a href="mailto:sheenammiddha.19@gmail.com" className="flex flex-col items-center gap-[12px] sm:gap-[16px] group focus-ring rounded-lg p-[12px] sm:p-[16px] hover:bg-gradient-to-t hover:from-cyan-50/50 hover:to-transparent min-h-[120px] sm:min-h-[140px]">
            <div className="p-[16px] sm:p-[20px] bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full text-cyan-600 transition-smooth hover-scale group-hover:from-cyan-200 group-hover:to-cyan-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25 w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] flex items-center justify-center border border-cyan-200/50">
              <FaEnvelope className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <span className="text-sm sm:text-base lg:text-lg text-gray-700 group-hover:text-cyan-700 transition-smooth font-medium text-center break-all">sheenammiddha.19@gmail.com</span>
          </a>
          <a href="tel:+919988441561" className="flex flex-col items-center gap-[12px] sm:gap-[16px] group focus-ring rounded-lg p-[12px] sm:p-[16px] hover:bg-gradient-to-t hover:from-blue-50/50 hover:to-transparent min-h-[120px] sm:min-h-[140px]">
            <div className="p-[16px] sm:p-[20px] bg-gradient-to-br from-blue-100 to-blue-200 rounded-full text-blue-600 transition-smooth hover-scale group-hover:from-blue-200 group-hover:to-blue-300 group-hover:shadow-lg group-hover:shadow-blue-500/25 w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] flex items-center justify-center border border-blue-200/50">
              <FaPhone className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <span className="text-sm sm:text-base lg:text-lg text-gray-700 group-hover:text-blue-700 transition-smooth font-medium text-center">+91 99884-41561</span>
          </a>
          <a href="http://www.linkedin.com/in/sheenammiddha/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-[12px] sm:gap-[16px] group focus-ring rounded-lg p-[12px] sm:p-[16px] hover:bg-gradient-to-t hover:from-indigo-50/50 hover:to-transparent min-h-[120px] sm:min-h-[140px]">
            <div className="p-[16px] sm:p-[20px] bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full text-indigo-600 transition-smooth hover-scale group-hover:from-indigo-200 group-hover:to-indigo-300 group-hover:shadow-lg group-hover:shadow-indigo-500/25 w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] flex items-center justify-center border border-indigo-200/50">
              <FaLinkedinIn className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <span className="text-sm sm:text-base lg:text-lg text-gray-700 group-hover:text-indigo-700 transition-smooth font-medium text-center">LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;