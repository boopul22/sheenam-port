
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { FaLinkedinIn, FaTwitter, FaDribbble, FaVimeoV, FaInstagram, FaUser, FaBriefcase, FaGraduationCap, FaCogs, FaFolderOpen, FaBlog, FaStar, FaEnvelope } from 'react-icons/fa';
import SwipeIndicator from './SwipeIndicator';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  // Tab icons for better UX
  const getTabIcon = (tabName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'about me': FaUser,
      'experience': FaBriefcase,
      'education': FaGraduationCap,
      'skills': FaCogs,
      'portfolio': FaFolderOpen,
      'my blog': FaBlog,
      'reviews': FaStar,
      'contact me': FaEnvelope,
    };
    return iconMap[tabName] || FaUser;
  };

  // Tab descriptions for better understanding
  const getTabDescription = (tabName: string) => {
    const descriptions: { [key: string]: string } = {
      'about me': 'Personal introduction & background',
      'experience': 'Work history & achievements',
      'education': 'Academic qualifications',
      'skills': 'Technical & professional skills',
      'portfolio': 'Featured projects & work samples',
      'my blog': 'Articles & insights',
      'reviews': 'Client testimonials',
      'contact me': 'Get in touch',
    };
    return descriptions[tabName] || '';
  };

  const socialIcons = [
    { Icon: FaTwitter, href: '#' },
    { Icon: FaDribbble, href: '#' },
    { Icon: FaLinkedinIn, href: 'http://www.linkedin.com/in/sheenammiddha/' },
    { Icon: FaVimeoV, href: '#' },
    { Icon: FaInstagram, href: '#' },
  ];

  const handleLinkClick = (tab: string) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
  }

  // Enhanced keyboard navigation support
  const handleKeyDown = (e: React.KeyboardEvent, tab: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleLinkClick(tab);
    }
  }

  // Enhanced keyboard navigation and shortcuts
  React.useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      // Close menu on escape key
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        return;
      }

      // Quick navigation shortcuts (when menu is closed)
      if (!isMenuOpen && (e.ctrlKey || e.metaKey)) {
        switch (e.key) {
          case '1':
            e.preventDefault();
            handleLinkClick('about me');
            break;
          case '2':
            e.preventDefault();
            handleLinkClick('experience');
            break;
          case '3':
            e.preventDefault();
            handleLinkClick('education');
            break;
          case '4':
            e.preventDefault();
            handleLinkClick('skills');
            break;
          case '5':
            e.preventDefault();
            handleLinkClick('portfolio');
            break;
          case '6':
            e.preventDefault();
            handleLinkClick('my blog');
            break;
          case '7':
            e.preventDefault();
            handleLinkClick('reviews');
            break;
          case '8':
            e.preventDefault();
            handleLinkClick('contact me');
            break;
        }
      }


    };

    document.addEventListener('keydown', handleKeyboard);
    return () => document.removeEventListener('keydown', handleKeyboard);
  }, [activeTab]);



  return (
    <header className="relative z-20 h-full flex items-center px-[16px] sm:px-[24px] lg:px-[32px] border-b border-gray-100/50 backdrop-blur-sm">
      {/* Header background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/50 to-transparent pointer-events-none"></div>

      <div className="flex justify-between items-center w-full relative z-10">
        <a href="#" className="text-2xl lg:text-3xl font-bold text-black hover:text-cyan-600 transition-smooth">sheenam.</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-[48px]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.name);
              }}
              className={`capitalize text-base font-medium transition-smooth cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[3px] after:bg-gradient-to-r after:from-cyan-500 after:to-blue-500 after:transition-smooth hover:after:w-full ${
                activeTab === link.name
                  ? 'text-black after:w-full'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* Social Icons */}
        <div className="hidden lg:flex items-center gap-[24px]">
          {socialIcons.map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-600 transition-smooth hover-scale w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-cyan-50"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Mobile Navigation Info - Show current section */}
        <div className="lg:hidden flex items-center space-x-2">
          <div className="text-sm font-medium text-gray-700 capitalize">
            {activeTab}
          </div>
          <div className="text-xs text-gray-500">
            {NAV_LINKS.findIndex(link => link.name === activeTab) + 1}/{NAV_LINKS.length}
          </div>
        </div>
      </div>

      {/* Swipe Navigation Indicator */}
      <SwipeIndicator
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showHint={showSwipeHint}
        onHintDismiss={() => setShowSwipeHint(false)}
      />

    </header>
  );
};

export default Header;