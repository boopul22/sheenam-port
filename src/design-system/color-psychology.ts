// Color Psychology Implementation Guide
// Strategic color usage to influence user behavior and create emotional connections

export const COLOR_PSYCHOLOGY = {
  // Primary Actions - Cyan/Blue for trust, professionalism, and reliability
  // These colors evoke feelings of trust, stability, and competence
  primary: {
    // Main CTA buttons, primary navigation, key actions
    cta: 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600',
    ctaText: 'text-white',
    ctaShadow: 'shadow-lg hover:shadow-xl shadow-cyan-500/25',
    
    // Links and interactive elements
    link: 'text-cyan-600 hover:text-cyan-700',
    linkBg: 'hover:bg-cyan-50',
    
    // Accent elements
    accent: 'text-cyan-500',
    accentBg: 'bg-cyan-100',
    accentBorder: 'border-cyan-300',
  },

  // Secondary Actions - Neutral colors for less prominent actions
  // Gray tones convey sophistication and balance
  secondary: {
    // Secondary buttons, alternative actions
    cta: 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300',
    ctaText: 'text-gray-700 hover:text-gray-900',
    ctaShadow: 'shadow-md hover:shadow-lg',
    
    // Supporting text and elements
    text: 'text-gray-600',
    textMuted: 'text-gray-500',
    textLight: 'text-gray-400',
  },

  // Success States - Green for positive feedback and achievements
  // Green represents growth, success, and positive outcomes
  success: {
    bg: 'bg-green-50',
    text: 'text-green-700',
    accent: 'text-green-500',
    border: 'border-green-200',
    icon: 'text-green-600',
  },

  // Warning/Attention - Amber for important information
  // Amber draws attention without being alarming
  warning: {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    accent: 'text-amber-500',
    border: 'border-amber-200',
    icon: 'text-amber-600',
  },

  // Error States - Red for errors and critical information
  // Red signals urgency and importance
  error: {
    bg: 'bg-red-50',
    text: 'text-red-700',
    accent: 'text-red-500',
    border: 'border-red-200',
    icon: 'text-red-600',
  },

  // Background Hierarchy - Creating depth and focus
  backgrounds: {
    // Primary content areas
    primary: 'bg-white',
    primaryElevated: 'bg-white shadow-lg',
    
    // Secondary content areas
    secondary: 'bg-gray-50',
    secondaryElevated: 'bg-gray-50 shadow-md',
    
    // Subtle backgrounds for less important content
    subtle: 'bg-gray-25',
    
    // Glass morphism for modern feel
    glass: 'bg-white/75 backdrop-blur-16',
  },

  // Text Hierarchy - Guiding attention through contrast
  text: {
    // Primary headings - highest contrast for maximum impact
    primary: 'text-gray-900',
    primaryBold: 'text-black font-bold',
    
    // Secondary headings - slightly less contrast
    secondary: 'text-gray-800',
    secondaryBold: 'text-gray-800 font-semibold',
    
    // Body text - comfortable reading contrast
    body: 'text-gray-700',
    bodyMuted: 'text-gray-600',
    
    // Supporting text - lower contrast for hierarchy
    supporting: 'text-gray-500',
    caption: 'text-gray-400',
    
    // Interactive text
    interactive: 'text-cyan-600 hover:text-cyan-700',
  },

  // Emotional Connections - Colors that create specific feelings
  emotional: {
    // Trust and reliability (blues/cyans)
    trust: 'text-blue-600 bg-blue-50',
    trustStrong: 'text-blue-700 bg-blue-100',
    
    // Creativity and innovation (purples)
    creative: 'text-purple-600 bg-purple-50',
    creativeStrong: 'text-purple-700 bg-purple-100',
    
    // Energy and enthusiasm (oranges)
    energetic: 'text-orange-600 bg-orange-50',
    energeticStrong: 'text-orange-700 bg-orange-100',
    
    // Growth and success (greens)
    growth: 'text-green-600 bg-green-50',
    growthStrong: 'text-green-700 bg-green-100',
  },

  // Interactive States - Providing clear feedback
  interactive: {
    // Hover states
    hover: {
      primary: 'hover:bg-cyan-600 hover:shadow-xl',
      secondary: 'hover:bg-gray-100',
      subtle: 'hover:bg-gray-50',
    },
    
    // Focus states for accessibility
    focus: {
      ring: 'focus:ring-4 focus:ring-cyan-200 focus:outline-none',
      ringSecondary: 'focus:ring-4 focus:ring-gray-200 focus:outline-none',
    },
    
    // Active states
    active: {
      primary: 'active:bg-cyan-700',
      secondary: 'active:bg-gray-200',
    },
    
    // Disabled states
    disabled: {
      bg: 'bg-gray-100',
      text: 'text-gray-400',
      cursor: 'cursor-not-allowed',
    },
  },
} as const;

// Helper functions for applying color psychology
export const getCtaColors = (variant: 'primary' | 'secondary' = 'primary') => {
  if (variant === 'primary') {
    return `${COLOR_PSYCHOLOGY.primary.cta} ${COLOR_PSYCHOLOGY.primary.ctaText} ${COLOR_PSYCHOLOGY.primary.ctaShadow}`;
  }
  return `${COLOR_PSYCHOLOGY.secondary.cta} ${COLOR_PSYCHOLOGY.secondary.ctaText} ${COLOR_PSYCHOLOGY.secondary.ctaShadow}`;
};

export const getTextColors = (hierarchy: 'primary' | 'secondary' | 'body' | 'supporting' | 'caption' = 'body') => {
  switch (hierarchy) {
    case 'primary':
      return COLOR_PSYCHOLOGY.text.primaryBold;
    case 'secondary':
      return COLOR_PSYCHOLOGY.text.secondaryBold;
    case 'body':
      return COLOR_PSYCHOLOGY.text.body;
    case 'supporting':
      return COLOR_PSYCHOLOGY.text.supporting;
    case 'caption':
      return COLOR_PSYCHOLOGY.text.caption;
    default:
      return COLOR_PSYCHOLOGY.text.body;
  }
};

export const getBackgroundColors = (level: 'primary' | 'secondary' | 'subtle' | 'glass' = 'primary') => {
  switch (level) {
    case 'primary':
      return COLOR_PSYCHOLOGY.backgrounds.primary;
    case 'secondary':
      return COLOR_PSYCHOLOGY.backgrounds.secondary;
    case 'subtle':
      return COLOR_PSYCHOLOGY.backgrounds.subtle;
    case 'glass':
      return COLOR_PSYCHOLOGY.backgrounds.glass;
    default:
      return COLOR_PSYCHOLOGY.backgrounds.primary;
  }
};

export const getEmotionalColors = (emotion: 'trust' | 'creative' | 'energetic' | 'growth') => {
  return COLOR_PSYCHOLOGY.emotional[emotion];
};

// Color combinations for specific use cases
export const COLOR_COMBINATIONS = {
  // Hero section - trust and professionalism
  hero: {
    background: 'bg-gradient-to-br from-gray-50 via-white to-cyan-50',
    title: COLOR_PSYCHOLOGY.text.primaryBold,
    subtitle: COLOR_PSYCHOLOGY.text.body,
    cta: getCtaColors('primary'),
    ctaSecondary: getCtaColors('secondary'),
  },
  
  // Portfolio section - creativity and achievement
  portfolio: {
    background: COLOR_PSYCHOLOGY.backgrounds.primary,
    title: COLOR_PSYCHOLOGY.text.primaryBold,
    description: COLOR_PSYCHOLOGY.text.body,
    cardHover: 'hover:shadow-xl hover:shadow-cyan-500/10',
  },
  
  // Contact section - approachability and trust
  contact: {
    background: COLOR_PSYCHOLOGY.backgrounds.primary,
    title: COLOR_PSYCHOLOGY.text.primaryBold,
    description: COLOR_PSYCHOLOGY.text.body,
    iconBg: COLOR_PSYCHOLOGY.primary.accentBg,
    iconColor: COLOR_PSYCHOLOGY.primary.accent,
    iconHover: 'hover:bg-cyan-200 hover:shadow-lg hover:shadow-cyan-500/20',
  },
  
  // Navigation - clarity and accessibility
  navigation: {
    background: COLOR_PSYCHOLOGY.backgrounds.glass,
    activeLink: COLOR_PSYCHOLOGY.text.primary,
    inactiveLink: COLOR_PSYCHOLOGY.text.supporting,
    hoverLink: COLOR_PSYCHOLOGY.text.primary,
    underline: 'bg-gradient-to-r from-cyan-500 to-blue-500',
  },
} as const;
