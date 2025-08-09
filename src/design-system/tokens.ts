// Design System Tokens
// Mathematical spacing system based on 8px grid for perfect alignment

export const SPACING = {
  // Base unit: 8px - all spacing should be multiples of this
  base: 8,
  
  // Spacing scale (in px)
  xs: 4,    // 0.5 * base
  sm: 8,    // 1 * base  
  md: 16,   // 2 * base
  lg: 24,   // 3 * base
  xl: 32,   // 4 * base
  '2xl': 48,  // 6 * base
  '3xl': 64,  // 8 * base
  '4xl': 96,  // 12 * base
  '5xl': 128, // 16 * base
  '6xl': 192, // 24 * base
} as const;

// Typography hierarchy with psychological impact
export const TYPOGRAPHY = {
  // Font sizes with consistent scale ratio (1.25 - Major Third)
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem',  // 72px
    '8xl': '6rem',    // 96px
    '9xl': '8rem',    // 128px
  },
  
  // Font weights for hierarchy
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  
  // Line heights for readability
  lineHeight: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  
  // Letter spacing for visual refinement
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

// Color psychology system
export const COLORS = {
  // Primary brand colors - cyan for trust and professionalism
  primary: {
    50: '#ecfeff',
    100: '#cffafe', 
    200: '#a5f3fc',
    300: '#67e8f9',  // Main accent
    400: '#22d3ee',
    500: '#06b6d4',  // Primary
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
  },
  
  // Secondary colors - blue for stability and trust
  secondary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',  // Secondary accent
    500: '#3b82f6',  // Secondary
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  
  // Success colors - green for positive actions
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  
  // Warning colors - amber for attention
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  
  // Neutral colors for text and backgrounds
  neutral: {
    0: '#ffffff',
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
} as const;

// Component sizing standards
export const SIZING = {
  // Button heights
  button: {
    sm: 32,   // 4 * base
    md: 40,   // 5 * base
    lg: 48,   // 6 * base
    xl: 56,   // 7 * base
  },
  
  // Input heights
  input: {
    sm: 32,   // 4 * base
    md: 40,   // 5 * base
    lg: 48,   // 6 * base
  },
  
  // Card padding
  card: {
    sm: 16,   // 2 * base
    md: 24,   // 3 * base
    lg: 32,   // 4 * base
    xl: 48,   // 6 * base
  },
  
  // Container max widths
  container: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
    '3xl': 1600, // Custom for this design
  },
} as const;

// Border radius system
export const RADIUS = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  '3xl': 32,
  full: 9999,
} as const;

// Shadow system for depth hierarchy
export const SHADOWS = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;

// Animation timing for consistent motion
export const ANIMATION = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// Z-index system for layering
export const Z_INDEX = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modal: 40,
  popover: 50,
  tooltip: 60,
  toast: 70,
} as const;

// Breakpoints for responsive design
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;
