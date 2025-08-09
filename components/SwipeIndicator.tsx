import React from 'react';
import { NAV_LINKS } from '../constants';

interface SwipeIndicatorProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  showHint: boolean;
  onHintDismiss: () => void;
}

const SwipeIndicator: React.FC<SwipeIndicatorProps> = ({
  activeTab,
  setActiveTab,
  showHint,
  onHintDismiss
}) => {
  const currentIndex = NAV_LINKS.findIndex(link => link.name === activeTab);
  const totalTabs = NAV_LINKS.length;

  return (
    <>
      {/* Swipe Hint Overlay - Shows on first visit */}
      {showHint && (
        <div className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm mx-auto shadow-2xl border border-gray-100">
            <div className="text-center">
              <div className="text-4xl mb-4">👆</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Swipe to Navigate
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Swipe left or right anywhere on the screen to explore different sections
              </p>
              
              {/* Visual swipe demonstration */}
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <span>←</span>
                  <span>Previous</span>
                </div>
                <div className="w-8 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <span>Next</span>
                  <span>→</span>
                </div>
              </div>
              
              <button
                onClick={onHintDismiss}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium py-3 px-4 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Progress Indicator Bar - Always visible on mobile only */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="px-4 py-2">
          {/* Current section info */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-medium text-gray-600">
                {currentIndex + 1} of {totalTabs}
              </span>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-sm font-medium text-gray-900 capitalize">
                {activeTab}
              </span>
            </div>
            
            {/* Navigation arrows */}
            <div className="flex items-center space-x-1">
              <button
                onClick={() => {
                  if (currentIndex > 0) {
                    const prevTab = NAV_LINKS[currentIndex - 1].name;
                    setActiveTab(prevTab);
                  }
                }}
                disabled={currentIndex === 0}
                className={`min-w-[44px] min-h-[44px] w-11 h-11 rounded-full flex items-center justify-center text-sm transition-all duration-200 ${
                  currentIndex === 0
                    ? 'text-gray-300 bg-gray-50'
                    : 'text-gray-600 bg-gray-100 hover:bg-gray-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-500'
                }`}
                aria-label="Previous section"
              >
                ←
              </button>
              <button
                onClick={() => {
                  if (currentIndex < totalTabs - 1) {
                    const nextTab = NAV_LINKS[currentIndex + 1].name;
                    setActiveTab(nextTab);
                  }
                }}
                disabled={currentIndex === totalTabs - 1}
                className={`min-w-[44px] min-h-[44px] w-11 h-11 rounded-full flex items-center justify-center text-sm transition-all duration-200 ${
                  currentIndex === totalTabs - 1
                    ? 'text-gray-300 bg-gray-50'
                    : 'text-gray-600 bg-gray-100 hover:bg-gray-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-500'
                }`}
                aria-label="Next section"
              >
                →
              </button>
            </div>
          </div>
          
          {/* Progress dots */}
          <div className="flex items-center justify-center space-x-1">
            {NAV_LINKS.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-cyan-500 to-blue-500'
                    : index < currentIndex
                    ? 'w-1.5 bg-gray-400'
                    : 'w-1.5 bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Swipe instruction at bottom - Subtle and dismissible */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-30">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-gray-100 flex items-center justify-center space-x-2">
          <span className="text-xs text-gray-600">
            Swipe ← → to navigate
          </span>
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwipeIndicator;
