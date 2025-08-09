import React, { useEffect } from 'react';
import ProposalApp from '../content-writing-proposal/App';

const ProposalPage: React.FC = () => {
  useEffect(() => {
    // Override global styles to make proposal page completely independent
    document.body.style.overflow = 'auto';
    document.body.style.background = '';
    document.documentElement.style.overflow = 'auto';

    // Cleanup function to restore original styles when leaving the page
    return () => {
      document.body.style.overflow = 'hidden';
      document.body.style.background = 'white';
    };
  }, []);

  return (
    <div
      className="min-h-screen w-full"
      style={{
        overflow: 'auto',
        position: 'relative',
        zIndex: 1
      }}
    >
      <ProposalApp />
    </div>
  );
};

export default ProposalPage;
