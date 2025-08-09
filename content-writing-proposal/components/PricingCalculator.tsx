
import React from 'react';
import type { PricingDetails } from '../types';

interface ToggleSwitchProps {
  label: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, enabled, onChange }) => (
  <label className="flex items-center justify-between cursor-pointer group">
    <span className="text-slate-100 font-medium group-hover:text-white transition-colors">{label}</span>
    <div className="relative">
      <input type="checkbox" className="sr-only" checked={enabled} onChange={(e) => onChange(e.target.checked)} />
      <div className={`block w-14 h-8 rounded-full transition-all duration-300 ${enabled ? 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/25' : 'bg-slate-600 hover:bg-slate-500'}`}></div>
      <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-all duration-300 shadow-md ${enabled ? 'transform translate-x-6' : ''}`}></div>
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
    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
      {/* Calculator Section */}
      <div className="lg:col-span-2 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm border border-slate-600/50 p-6 sm:p-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center lg:text-left">Blog & Article Cost Calculator</h3>

        <div className="space-y-8">
          {/* Word Count Slider */}
          <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
            <label htmlFor="word-count" className="block text-base font-semibold text-slate-100 mb-4">Word Count</label>
            <input
              type="range"
              id="word-count"
              min="100"
              max="5000"
              step="100"
              value={wordCount}
              onChange={(e) => setWordCount(parseInt(e.target.value))}
              className="w-full h-3 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400 transition-colors"
            />
            <div className="text-center mt-4">
              <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-xl px-4 py-2 rounded-lg shadow-lg">
                {wordCount} words
              </span>
            </div>
          </div>

          {/* SEO Option */}
          <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
              <ToggleSwitch label="SEO Optimization" enabled={includeSeo} onChange={setIncludeSeo} />
              <p className="text-sm text-slate-200 mt-3 pl-2 leading-relaxed">Keyword integration, meta title & description, headings, and internal linking.</p>
          </div>

          {/* Images Option */}
          <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
              <ToggleSwitch label="High-Quality Stock Images" enabled={includeImages} onChange={setIncludeImages} />
              <p className="text-sm text-slate-200 mt-3 pl-2 leading-relaxed">Licensed, royalty-free images, including sourcing and resizing.</p>
          </div>
        </div>
      </div>

      {/* Pricing Estimate Section */}
      <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 rounded-2xl shadow-2xl border border-slate-600/50 p-6 sm:p-8 backdrop-blur-sm">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Your Estimate</h3>

        <div className="space-y-4">
          {/* Writing Fee */}
          <div className="bg-slate-700/40 rounded-lg p-4 border border-slate-600/30">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-slate-100 font-medium">Writing Fee</span>
                <div className="text-xs text-slate-300 mt-1">
                  @ ₹{pricingDetails.rate.toFixed(2)} per word
                </div>
              </div>
              <span className="font-bold text-white text-lg">{formatCurrency(pricingDetails.writingFee)}</span>
            </div>
          </div>

          {/* SEO Optimization */}
          <div className={`bg-slate-700/40 rounded-lg p-4 border border-slate-600/30 transition-all duration-300 ${includeSeo ? 'opacity-100 border-cyan-500/30' : 'opacity-50'}`}>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-slate-100 font-medium">SEO Optimization</span>
                <div className="text-xs text-slate-300 mt-1">
                  {includeSeo ? 'Included' : 'Not selected'}
                </div>
              </div>
              <span className="font-bold text-white text-lg">{formatCurrency(pricingDetails.seoFee)}</span>
            </div>
          </div>

          {/* Stock Images */}
          <div className={`bg-slate-700/40 rounded-lg p-4 border border-slate-600/30 transition-all duration-300 ${includeImages ? 'opacity-100 border-cyan-500/30' : 'opacity-50'}`}>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-slate-100 font-medium">Stock Images</span>
                <div className="text-xs text-slate-300 mt-1">
                  {includeImages ? 'Included' : 'Not selected'}
                </div>
              </div>
              <span className="font-bold text-white text-lg">{formatCurrency(pricingDetails.imageFee)}</span>
            </div>
          </div>

          {/* Special Offer Banner */}
          {isSpecialOfferActive && (
             <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 rounded-lg p-4 text-center animate-pulse">
                <div className="text-cyan-300 font-bold text-sm mb-1">🎉 SPECIAL OFFER APPLIED!</div>
                <div className="text-cyan-200 text-xs">Writing rate discounted to ₹{pricingDetails.rate}/word when both SEO & Images are selected</div>
             </div>
          )}

          {/* Total */}
          <div className={`bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-6 border-2 transition-all duration-500 ${isSpecialOfferActive ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/20' : 'border-slate-600/50'}`}>
             <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-white">Total Investment</span>
                <div className="text-right">
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {formatCurrency(pricingDetails.total)}
                  </div>
                  <div className="text-xs text-slate-300 mt-1">All inclusive</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
