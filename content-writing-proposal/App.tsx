
import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { PricingCalculator } from './components/PricingCalculator';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
import { WhyMe } from './components/WhyMe';
import { Contact } from './components/Contact';
import { PRICING } from './constants';

function App() {
  const [wordCount, setWordCount] = useState(1000);
  const [includeSeo, setIncludeSeo] = useState(true);
  const [includeImages, setIncludeImages] = useState(true);

  const isSpecialOfferActive = useMemo(() => includeSeo && includeImages, [includeSeo, includeImages]);

  const pricingDetails = useMemo(() => {
    const rate = isSpecialOfferActive ? PRICING.per_word_discounted : PRICING.per_word;
    const writingFee = wordCount * rate;
    const seoFee = includeSeo ? PRICING.seo : 0;
    const imageFee = includeImages ? PRICING.images : 0;
    const total = writingFee + seoFee + imageFee;

    return {
      rate,
      writingFee,
      seoFee,
      imageFee,
      total,
    };
  }, [wordCount, includeSeo, includeImages, isSpecialOfferActive]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24 sm:space-y-32">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-4 font-display">Pricing & Services</h2>
          <p className="text-center text-lg text-slate-200 max-w-3xl mx-auto mb-12 leading-relaxed">Flexible and transparent pricing to match your content needs. Calculate your investment for high-quality blog content.</p>
          <PricingCalculator
            wordCount={wordCount}
            setWordCount={setWordCount}
            includeSeo={includeSeo}
            setIncludeSeo={setIncludeSeo}
            includeImages={includeImages}
            setIncludeImages={setIncludeImages}
            pricingDetails={pricingDetails}
            isSpecialOfferActive={isSpecialOfferActive}
          />
        </div>
        <Services />
        <Portfolio />
        <Skills />
        <WhyMe />
      </main>
      <Contact />
    </div>
  );
}

export default App;
