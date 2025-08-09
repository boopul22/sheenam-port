
import React from 'react';
import type { PricingDetails } from '../types';

interface ToggleSwitchProps {
  label: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, enabled, onChange }) => (
  <label className="flex items-center justify-between cursor-pointer">
    <span className="text-slate-300">{label}</span>
    <div className="relative">
      <input type="checkbox" className="sr-only" checked={enabled} onChange={(e) => onChange(e.target.checked)} />
      <div className={`block w-14 h-8 rounded-full transition-colors ${enabled ? 'bg-cyan-500' : 'bg-slate-600'}`}></div>
      <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${enabled ? 'transform translate-x-6' : ''}`}></div>
    </div>
  </label>
);

interface PricingCalculatorProps {
  wordCount: number;
  setWordCount: (count: number) => void;
  includeSeo: boolean;
  setIncludeSeo: (include: boolean) => void;
  includeImages: boolean;
  setIncludeImages: (include: boolean) => void;
  pricingDetails: PricingDetails;
  isSpecialOfferActive: boolean;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({
  wordCount,
  setWordCount,
  includeSeo,
  setIncludeSeo,
  includeImages,
  setIncludeImages,
  pricingDetails,
  isSpecialOfferActive,
}) => {
  const formatCurrency = (amount: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(amount);

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 bg-slate-800/50 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm border border-slate-700">
      <div className="p-8 lg:col-span-3">
        <h3 className="text-2xl font-bold text-white mb-6">Blog & Article Cost Calculator</h3>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="word-count" className="block text-sm font-medium text-slate-300 mb-2">Word Count</label>
            <input
              type="range"
              id="word-count"
              min="100"
              max="5000"
              step="100"
              value={wordCount}
              onChange={(e) => setWordCount(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <div className="text-center mt-2 text-white font-bold text-lg">{wordCount} words</div>
          </div>
          
          <div className="space-y-4 pt-4 border-t border-slate-700">
              <ToggleSwitch label="SEO Optimization" enabled={includeSeo} onChange={setIncludeSeo} />
              <p className="text-sm text-slate-400 pl-2">Keyword integration, meta title & description, headings, and internal linking.</p>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-700">
              <ToggleSwitch label="High-Quality Stock Images" enabled={includeImages} onChange={setIncludeImages} />
              <p className="text-sm text-slate-400 pl-2">Licensed, royalty-free images, including sourcing and resizing.</p>
          </div>
        </div>
      </div>
      
      <div className="p-8 lg:col-span-2 bg-slate-900/70 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">Your Estimate</h3>
        <div className="flex-grow space-y-3 text-sm">
          <div className="flex justify-between">
            <span>Writing Fee</span>
            <span className="font-medium text-white">{formatCurrency(pricingDetails.writingFee)}</span>
          </div>
          <div className="text-xs text-right text-slate-400 -mt-2">
            (@ ₹{pricingDetails.rate.toFixed(2)} / word)
          </div>

          <div className={`flex justify-between transition-opacity duration-300 ${includeSeo ? 'opacity-100' : 'opacity-30'}`}>
            <span>SEO Optimization</span>
            <span className="font-medium text-white">{formatCurrency(pricingDetails.seoFee)}</span>
          </div>
          
          <div className={`flex justify-between transition-opacity duration-300 ${includeImages ? 'opacity-100' : 'opacity-30'}`}>
            <span>Stock Images</span>
            <span className="font-medium text-white">{formatCurrency(pricingDetails.imageFee)}</span>
          </div>

          <div className={`pt-4 mt-4 border-t-2 transition-all duration-500 ${isSpecialOfferActive ? 'border-cyan-500' : 'border-slate-700'}`}>
              {isSpecialOfferActive && (
                 <div className="text-center text-cyan-400 bg-cyan-900/50 p-3 rounded-lg mb-4 text-xs font-bold transition-all duration-300">
                    SPECIAL OFFER APPLIED!
                    <br/>
                    Writing rate discounted to ₹1.3/word.
                 </div>
              )}
             <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-white">Total</span>
                <span className="text-3xl font-extrabold text-cyan-400">{formatCurrency(pricingDetails.total)}</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
