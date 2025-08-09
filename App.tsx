
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import LatestWork from './components/LatestWork';
import Blog from './components/Blog';
import Reviews from './components/Reviews';
import GeometricBackground from './components/GeometricBackground';
import SwipeHandler from './components/SwipeHandler';
import { NAV_LINKS } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('about me');
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [displayTab, setDisplayTab] = React.useState('about me');

  // Enhanced tab switching with smooth transitions
  React.useEffect(() => {
    if (activeTab !== displayTab) {
      setIsTransitioning(true);

      // Short delay for exit animation
      const exitTimer = setTimeout(() => {
        setDisplayTab(activeTab);
        setIsTransitioning(false);
      }, 150);

      return () => clearTimeout(exitTimer);
    }
  }, [activeTab, displayTab]);

  const renderContent = () => {
    switch (displayTab) {
      case 'about me':
        return <Hero />;
      case 'experience':
        return <Experience />;
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      case 'portfolio':
        return <LatestWork />;
      case 'my blog':
        return <Blog />;
      case 'reviews':
        return <Reviews />;
      case 'contact me':
        return <ContactMe />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="layout-stable min-h-screen bg-gradient-to-br from-gray-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements with consistent positioning */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[80px] right-[80px] w-[384px] h-[384px] bg-gradient-to-bl from-cyan-100 to-transparent opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[80px] left-[80px] w-[320px] h-[320px] bg-gradient-to-tr from-blue-100 to-transparent opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-[256px] h-[256px] bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full blur-2xl opacity-40"></div>
      </div>

      {/* Main container with fixed dimensions to prevent layout shift */}
      <div className="container mx-auto h-full max-w-[1600px] relative z-10 px-[8px] sm:px-[16px] lg:px-[32px] py-[8px] sm:py-[16px] lg:py-[32px]">
        <div className="container-surface container-pattern no-shadows rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden h-full min-h-[calc(100vh-16px)] sm:min-h-[calc(100vh-32px)] lg:min-h-[calc(100vh-64px)] flex flex-col border border-gray-200 relative">
          {/* Interactive geometric background */}
          <GeometricBackground
            activeTab={activeTab}
            isTransitioning={isTransitioning}
          />

          {/* Header with fixed height to prevent shifts */}
          <div className="flex-shrink-0 h-[88px] relative z-10">
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          {/* Main content area with enhanced swipe handling */}
          <main className="flex-1 overflow-hidden content-container relative z-10">
            <SwipeHandler
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            >
              <div
                key={displayTab}
                className={`h-full w-full transition-smooth ${
                  isTransitioning ? 'tab-exit' : 'tab-fade'
                }`}
              >
                {renderContent()}
              </div>
            </SwipeHandler>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;