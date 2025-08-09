import { SPACING, COLORS, SIZING, RADIUS, SHADOWS, ANIMATION } from './tokens';

// Utility function to generate consistent spacing classes
export const spacing = {
  // Padding utilities
  p: (size: keyof typeof SPACING) => `p-[${SPACING[size]}px]`,
  px: (size: keyof typeof SPACING) => `px-[${SPACING[size]}px]`,
  py: (size: keyof typeof SPACING) => `py-[${SPACING[size]}px]`,
  pt: (size: keyof typeof SPACING) => `pt-[${SPACING[size]}px]`,
  pb: (size: keyof typeof SPACING) => `pb-[${SPACING[size]}px]`,
  pl: (size: keyof typeof SPACING) => `pl-[${SPACING[size]}px]`,
  pr: (size: keyof typeof SPACING) => `pr-[${SPACING[size]}px]`,
  
  // Margin utilities
  m: (size: keyof typeof SPACING) => `m-[${SPACING[size]}px]`,
  mx: (size: keyof typeof SPACING) => `mx-[${SPACING[size]}px]`,
  my: (size: keyof typeof SPACING) => `my-[${SPACING[size]}px]`,
  mt: (size: keyof typeof SPACING) => `mt-[${SPACING[size]}px]`,
  mb: (size: keyof typeof SPACING) => `mb-[${SPACING[size]}px]`,
  ml: (size: keyof typeof SPACING) => `ml-[${SPACING[size]}px]`,
  mr: (size: keyof typeof SPACING) => `mr-[${SPACING[size]}px]`,
  
  // Gap utilities
  gap: (size: keyof typeof SPACING) => `gap-[${SPACING[size]}px]`,
  gapX: (size: keyof typeof SPACING) => `gap-x-[${SPACING[size]}px]`,
  gapY: (size: keyof typeof SPACING) => `gap-y-[${SPACING[size]}px]`,
};

// Color utility functions with psychological considerations
export const colors = {
  // Primary colors for main actions and brand elements
  primary: {
    bg: 'bg-cyan-500',
    bgHover: 'hover:bg-cyan-600',
    bgLight: 'bg-cyan-50',
    text: 'text-cyan-600',
    textHover: 'hover:text-cyan-700',
    border: 'border-cyan-300',
    borderHover: 'hover:border-cyan-400',
  },
  
  // Secondary colors for supporting elements
  secondary: {
    bg: 'bg-blue-500',
    bgHover: 'hover:bg-blue-600',
    bgLight: 'bg-blue-50',
    text: 'text-blue-600',
    textHover: 'hover:text-blue-700',
    border: 'border-blue-300',
    borderHover: 'hover:border-blue-400',
  },
  
  // Success colors for positive feedback
  success: {
    bg: 'bg-green-500',
    bgHover: 'hover:bg-green-600',
    bgLight: 'bg-green-50',
    text: 'text-green-600',
    textHover: 'hover:text-green-700',
    border: 'border-green-300',
  },
  
  // Warning colors for attention-grabbing elements
  warning: {
    bg: 'bg-amber-500',
    bgHover: 'hover:bg-amber-600',
    bgLight: 'bg-amber-50',
    text: 'text-amber-600',
    textHover: 'hover:text-amber-700',
    border: 'border-amber-300',
  },
  
  // Neutral colors for text and backgrounds
  neutral: {
    bg: 'bg-white',
    bgGray: 'bg-gray-50',
    bgDark: 'bg-gray-900',
    text: 'text-gray-900',
    textMuted: 'text-gray-600',
    textLight: 'text-gray-400',
    border: 'border-gray-200',
    borderLight: 'border-gray-100',
  },
};

// Typography utilities with hierarchy
export const typography = {
  // Heading styles with psychological impact
  heading: {
    h1: 'text-6xl lg:text-7xl xl:text-8xl font-black text-gray-800 leading-tight',
    h2: 'text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight',
    h3: 'text-2xl lg:text-3xl xl:text-4xl font-bold text-black leading-snug',
    h4: 'text-xl lg:text-2xl font-bold text-gray-800 leading-snug',
    h5: 'text-lg lg:text-xl font-semibold text-gray-800 leading-normal',
    h6: 'text-base lg:text-lg font-semibold text-gray-700 leading-normal',
  },
  
  // Body text styles
  body: {
    large: 'text-lg lg:text-xl text-gray-600 leading-relaxed',
    base: 'text-base text-gray-600 leading-normal',
    small: 'text-sm text-gray-500 leading-normal',
    xs: 'text-xs text-gray-400 leading-normal',
  },
  
  // Special text styles
  special: {
    caption: 'text-sm text-gray-500 font-medium uppercase tracking-wide',
    label: 'text-sm font-medium text-gray-700',
    link: 'text-cyan-600 hover:text-cyan-700 font-medium transition-colors duration-300',
  },
};

// Component styling utilities
export const components = {
  // Button variants with psychological color usage
  button: {
    primary: `
      inline-flex items-center justify-center
      px-6 py-3 
      bg-gradient-to-r from-cyan-500 to-blue-500
      hover:from-cyan-600 hover:to-blue-600
      text-white font-semibold
      rounded-xl shadow-lg hover:shadow-xl
      transform hover:scale-105 hover:-translate-y-1
      transition-all duration-300 ease-out
      focus:outline-none focus:ring-4 focus:ring-cyan-200
    `,
    
    secondary: `
      inline-flex items-center justify-center
      px-6 py-3
      bg-white hover:bg-gray-50
      text-gray-700 hover:text-gray-900 font-semibold
      border border-gray-200 hover:border-gray-300
      rounded-xl shadow-md hover:shadow-lg
      transform hover:-translate-y-0.5
      transition-all duration-300 ease-out
      focus:outline-none focus:ring-4 focus:ring-gray-200
    `,
    
    ghost: `
      inline-flex items-center justify-center
      px-4 py-2
      text-gray-600 hover:text-gray-900 font-medium
      hover:bg-gray-100
      rounded-lg
      transition-all duration-300 ease-out
      focus:outline-none focus:ring-2 focus:ring-gray-200
    `,
  },
  
  // Card variants for consistent containers
  card: {
    base: `
      bg-white rounded-xl shadow-md border border-gray-100
      transition-all duration-300 ease-out
      hover:shadow-lg hover:-translate-y-1
    `,
    
    elevated: `
      bg-white rounded-2xl shadow-xl border border-gray-100
      transition-all duration-500 ease-out
      hover:shadow-2xl hover:-translate-y-2
    `,
    
    glass: `
      backdrop-filter blur-16 saturate-180
      bg-white/75 rounded-xl
      border border-white/30
      shadow-2xl shadow-gray-500/15
    `,
  },
  
  // Input styles
  input: {
    base: `
      w-full px-4 py-3
      bg-white border border-gray-200
      rounded-lg shadow-sm
      text-gray-900 placeholder-gray-400
      focus:outline-none focus:ring-4 focus:ring-cyan-200 focus:border-cyan-400
      transition-all duration-300 ease-out
    `,
  },
  
  // Navigation styles
  nav: {
    link: `
      relative font-medium transition-all duration-300 cursor-pointer
      after:content-[''] after:absolute after:left-0 after:bottom-[-4px] 
      after:w-0 after:h-[3px] after:bg-gradient-to-r after:from-cyan-500 after:to-blue-500
      after:transition-all after:duration-300 hover:after:w-full
    `,
    
    linkActive: `
      text-black after:w-full
    `,
    
    linkInactive: `
      text-gray-500 hover:text-black
    `,
  },
};

// Layout utilities for consistent structure
export const layout = {
  // Container styles
  container: {
    base: 'container mx-auto px-4 sm:px-6 lg:px-8',
    narrow: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
    wide: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    full: 'max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8',
  },
  
  // Section styles with consistent spacing
  section: {
    base: 'py-16 lg:py-24',
    compact: 'py-12 lg:py-16',
    spacious: 'py-20 lg:py-32',
  },
  
  // Grid utilities
  grid: {
    auto: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    responsive: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    equal: 'grid grid-cols-1 lg:grid-cols-2',
  },
  
  // Flex utilities
  flex: {
    center: 'flex items-center justify-center',
    between: 'flex items-center justify-between',
    start: 'flex items-center justify-start',
    column: 'flex flex-col',
    columnCenter: 'flex flex-col items-center justify-center',
  },
};

// Animation utilities
export const animations = {
  // Hover effects
  hover: {
    lift: 'transform hover:-translate-y-1 transition-transform duration-300',
    liftLarge: 'transform hover:-translate-y-2 transition-transform duration-500',
    scale: 'transform hover:scale-105 transition-transform duration-300',
    glow: 'hover:shadow-xl transition-shadow duration-300',
  },
  
  // Focus effects
  focus: {
    ring: 'focus:outline-none focus:ring-4 focus:ring-cyan-200',
    ringSecondary: 'focus:outline-none focus:ring-4 focus:ring-blue-200',
  },
  
  // Transition utilities
  transition: {
    all: 'transition-all duration-300 ease-out',
    colors: 'transition-colors duration-300 ease-out',
    transform: 'transition-transform duration-300 ease-out',
    shadow: 'transition-shadow duration-300 ease-out',
  },
};

// Helper function to combine classes
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};
