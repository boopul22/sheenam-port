
import React from 'react';
import { VISA_SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section>
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-4 font-display">Visa & Immigration Writing</h2>
      <p className="text-center text-lg text-slate-200 max-w-3xl mx-auto mb-12 leading-relaxed">Expertly crafted documents to support your visa and immigration applications. Each document is tailored to be persuasive, professional, and precise.</p>

      {/* Desktop Table View */}
      <div className="hidden md:block max-w-5xl mx-auto bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-600/50 backdrop-blur-sm shadow-2xl">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-600/50">
            <thead>
              <tr className="bg-slate-700/30">
                <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white rounded-tl-lg">Service</th>
                <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white">Description</th>
                <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white rounded-tr-lg">Price (Writing Only)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {VISA_SERVICES.map((service, index) => (
                <tr key={index} className="hover:bg-slate-700/30 transition-all duration-200 group">
                  <td className="py-4 px-6 text-sm font-semibold text-slate-100 group-hover:text-white">{service.name}</td>
                  <td className="py-4 px-6 text-sm text-slate-200 group-hover:text-slate-100">{service.description}</td>
                  <td className="py-4 px-6 text-sm text-cyan-400 font-bold group-hover:text-cyan-300">{service.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden max-w-2xl mx-auto space-y-4">
        {VISA_SERVICES.map((service, index) => (
          <div key={index} className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-xl p-6 border border-slate-600/50 backdrop-blur-sm shadow-lg">
            <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
            <p className="text-slate-200 text-sm mb-3 leading-relaxed">{service.description}</p>
            <div className="flex justify-between items-center pt-3 border-t border-slate-600/30">
              <span className="text-xs text-slate-300 font-medium">Price (Writing Only)</span>
              <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
