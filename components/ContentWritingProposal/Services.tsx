
import React from 'react';
import { VISA_SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section>
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-4 font-display">Visa & Immigration Writing</h2>
      <p className="text-center text-lg text-slate-400 max-w-3xl mx-auto mb-12">Expertly crafted documents to support your visa and immigration applications. Each document is tailored to be persuasive, professional, and precise.</p>

      <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-2xl p-4 sm:p-8 border border-slate-700">
        <div className="flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-slate-700">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">Service</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Description</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Price (Writing Only)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {VISA_SERVICES.map((service, index) => (
                    <tr key={index} className="hover:bg-slate-800/60 transition-colors duration-200">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">{service.name}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-400">{service.description}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-cyan-400 font-semibold">{service.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
