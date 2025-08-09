import React from 'react';

interface GeometricBackgroundProps {
  activeTab: string;
  isTransitioning: boolean;
}

const GeometricBackground: React.FC<GeometricBackgroundProps> = ({ 
  activeTab, 
  isTransitioning 
}) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Track mouse movement for interactive effects with throttling for performance
  React.useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        // Throttle mouse updates using requestAnimationFrame
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({
              x: ((e.clientX - rect.left) / rect.width) * 100,
              y: ((e.clientY - rect.top) / rect.height) * 100,
            });
          }
        });
      }
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove, { passive: true });
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        cancelAnimationFrame(animationFrameId);
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  // Generate tab-specific typography patterns for content writing theme
  const getTypographyTheme = () => {
    switch (activeTab) {
      case 'about me':
        return {
          primary: 'multilingual-chars',
          accent: 'personal-writing',
          color: 'from-cyan-500/8 to-blue-500/8',
          elements: ['"', '"', '…', '—', '•'],
          characters: ['S', 'H', 'E', 'E', 'N', 'A', 'M'],
          animation: 'about-pulse',
          intensity: 0.5
        };
      case 'experience':
        return {
          primary: 'professional-marks',
          accent: 'career-symbols',
          color: 'from-green-500/8 to-teal-500/8',
          elements: ['★', '▲', '●', '■', '◆'],
          characters: ['E', 'X', 'P', 'E', 'R', 'I', 'E', 'N', 'C', 'E'],
          animation: 'experience-flow',
          intensity: 0.6
        };
      case 'education':
        return {
          primary: 'academic-symbols',
          accent: 'learning-marks',
          color: 'from-purple-500/8 to-indigo-500/8',
          elements: ['📚', '🎓', '✏️', '📝', '🔬'],
          characters: ['E', 'D', 'U', 'C', 'A', 'T', 'I', 'O', 'N'],
          animation: 'education-pulse',
          intensity: 0.4
        };
      case 'skills':
        return {
          primary: 'skill-indicators',
          accent: 'tech-symbols',
          color: 'from-orange-500/8 to-red-500/8',
          elements: ['⚡', '🔧', '💡', '🎯', '🚀'],
          characters: ['S', 'K', 'I', 'L', 'L', 'S'],
          animation: 'skills-rotate',
          intensity: 0.7
        };
      case 'portfolio':
        return {
          primary: 'typography-showcase',
          accent: 'editorial-marks',
          color: 'from-blue-500/8 to-cyan-500/8',
          elements: ['&', '§', '¶', '©', '®'],
          characters: ['A', 'Ω', '文', 'ص', 'Я'],
          animation: 'portfolio-flow',
          intensity: 0.7
        };
      case 'my blog':
        return {
          primary: 'blog-typography',
          accent: 'writing-tools',
          color: 'from-purple-500/8 to-blue-500/8',
          elements: ['✍', '📝', '✏', '🖋', '📖'],
          characters: ['B', 'L', 'O', 'G', '文章', 'مقال'],
          animation: 'blog-scatter',
          intensity: 0.6
        };
      case 'reviews':
        return {
          primary: 'review-symbols',
          accent: 'rating-marks',
          color: 'from-green-500/8 to-cyan-500/8',
          elements: ['★', '☆', '✓', '✗', '⭐'],
          characters: ['R', 'E', 'V', 'I', 'E', 'W'],
          animation: 'reviews-sparkle',
          intensity: 0.8
        };
      case 'contact me':
        return {
          primary: 'communication-symbols',
          accent: 'contact-typography',
          color: 'from-orange-500/8 to-cyan-500/8',
          elements: ['@', '#', '&', '+', '→'],
          characters: ['C', 'O', 'N', 'T', 'A', 'C', 'T'],
          animation: 'contact-connect',
          intensity: 0.9
        };
      default:
        return {
          primary: 'multilingual-chars',
          accent: 'personal-writing',
          color: 'from-cyan-500/8 to-blue-500/8',
          elements: ['"', '"', '…', '—', '•'],
          characters: ['S', 'H', 'E', 'E', 'N', 'A', 'M'],
          animation: 'about-pulse',
          intensity: 0.5
        };
    }
  };

  const typography = getTypographyTheme();

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.03) 0%, transparent 50%)`
      }}
    >
      {/* Static typography layer */}
      <div className={`typography-layer ${typography.primary}`}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          role="presentation"
          style={{
            shapeRendering: 'geometricPrecision',
            textRendering: 'optimizeSpeed'
          }}
        >
          {/* Typography-inspired patterns */}
          <defs>
            <pattern id="textGrid" width="50" height="50" patternUnits="userSpaceOnUse">
              <text
                x="25"
                y="30"
                fontSize="8"
                textAnchor="middle"
                fill="currentColor"
                className="text-cyan-500/15"
                fontFamily="Inter, sans-serif"
              >
                •
              </text>
            </pattern>

            <pattern id="quotationPattern" width="60" height="40" patternUnits="userSpaceOnUse">
              <text
                x="30"
                y="25"
                fontSize="12"
                textAnchor="middle"
                fill="currentColor"
                className="text-blue-500/20"
                fontFamily="Inter, sans-serif"
              >
                "
              </text>
            </pattern>
          </defs>

          {/* Subtle typography background */}
          <rect
            width="100%"
            height="100%"
            fill="url(#textGrid)"
            className={`transition-opacity duration-1000 ${isHovered ? 'opacity-50' : 'opacity-25'}`}
          />
          

          

        </svg>
      </div>
      
      {/* Accent typography elements */}
      <div className={`typography-accent ${typography.accent}`}>
        <div
          className={`absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br ${typography.color} rounded-full blur-xl animate-pulse-slow`}
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
          }}
        />
        <div
          className={`absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-tr ${typography.color} rounded-full blur-lg animate-pulse-slow-2`}
          style={{
            transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px)`
          }}
        />


      </div>
    </div>
  );
};

export default GeometricBackground;
