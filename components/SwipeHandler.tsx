import React, { useState, useRef, useCallback } from 'react';
import { NAV_LINKS } from '../constants';

interface SwipeHandlerProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  children: React.ReactNode;
}

const SwipeHandler: React.FC<SwipeHandlerProps> = ({ 
  activeTab, 
  setActiveTab, 
  children 
}) => {
  const [swipeProgress, setSwipeProgress] = useState(0);
  const [isSwipeActive, setIsSwipeActive] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentIndex = NAV_LINKS.findIndex(link => link.name === activeTab);
  const canSwipeLeft = currentIndex < NAV_LINKS.length - 1;
  const canSwipeRight = currentIndex > 0;

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
    setSwipeProgress(0);
    setIsSwipeActive(false);
    setSwipeDirection(null);

    // Prevent default to improve touch responsiveness
    e.preventDefault();
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!touchStartX.current || !touchStartY.current) return;

    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    // Only handle horizontal swipes (ignore vertical scrolling)
    // Increased threshold for better vertical scroll detection
    if (Math.abs(deltaY) > Math.abs(deltaX) * 1.5) return;

    // Prevent default scrolling for horizontal swipes
    if (Math.abs(deltaX) > 15) {
      e.preventDefault();
    }

    const containerWidth = containerRef.current?.offsetWidth || 375;
    const progress = Math.abs(deltaX) / (containerWidth * 0.25); // 25% of screen width for full swipe
    const clampedProgress = Math.min(progress, 1);

    // Determine swipe direction and check if it's valid
    const direction = deltaX > 0 ? 'right' : 'left';
    const isValidSwipe = (direction === 'left' && canSwipeLeft) || (direction === 'right' && canSwipeRight);

    if (Math.abs(deltaX) > 8) { // Lower threshold for better responsiveness
      setIsSwipeActive(true);
      setSwipeDirection(direction);

      if (isValidSwipe) {
        setSwipeProgress(clampedProgress);
      } else {
        // Show resistance for invalid swipes with elastic effect
        const resistanceProgress = clampedProgress * 0.4 * (1 - clampedProgress * 0.5);
        setSwipeProgress(resistanceProgress);
      }
    }
  }, [canSwipeLeft, canSwipeRight]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchStartX.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX;
    const containerWidth = containerRef.current?.offsetWidth || 375;

    // Dynamic threshold based on screen size and swipe progress
    const baseThreshold = Math.min(containerWidth * 0.2, 80); // 20% of screen or 80px max
    const progressThreshold = 0.6; // 60% progress threshold

    const isLeftSwipe = distance > baseThreshold;
    const isRightSwipe = distance < -baseThreshold;
    const hasEnoughProgress = swipeProgress >= progressThreshold;

    // Navigate if swipe meets both distance and progress requirements
    if ((isLeftSwipe || hasEnoughProgress) && swipeDirection === 'left' && canSwipeLeft) {
      const nextTab = NAV_LINKS[currentIndex + 1].name;
      setActiveTab(nextTab);
    } else if ((isRightSwipe || hasEnoughProgress) && swipeDirection === 'right' && canSwipeRight) {
      const prevTab = NAV_LINKS[currentIndex - 1].name;
      setActiveTab(prevTab);
    }

    // Reset swipe state with smooth animation
    setTimeout(() => {
      setSwipeProgress(0);
      setIsSwipeActive(false);
      setSwipeDirection(null);
    }, 100);

    touchStartX.current = null;
    touchStartY.current = null;
  }, [activeTab, canSwipeLeft, canSwipeRight, currentIndex, setActiveTab, swipeProgress, swipeDirection]);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        touchAction: 'pan-y', // Allow vertical scrolling but handle horizontal swipes
        userSelect: 'none', // Prevent text selection during swipes
        WebkitUserSelect: 'none',
        msUserSelect: 'none'
      }}
    >
      {/* Swipe Visual Feedback */}
      {isSwipeActive && (
        <>
          {/* Left edge indicator */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-2 swipe-edge-indicator transition-all duration-100 z-50 ${
              swipeDirection === 'right' ? 'opacity-100' : 'opacity-0'
            } ${swipeProgress > 0.8 ? 'swipe-feedback-active' : ''}`}
            style={{
              transform: `scaleY(${swipeProgress})`,
              transformOrigin: 'center'
            }}
          />

          {/* Right edge indicator */}
          <div
            className={`absolute right-0 top-0 bottom-0 w-2 swipe-edge-indicator transition-all duration-100 z-50 ${
              swipeDirection === 'left' ? 'opacity-100' : 'opacity-0'
            } ${swipeProgress > 0.8 ? 'swipe-feedback-active' : ''}`}
            style={{
              transform: `scaleY(${swipeProgress})`,
              transformOrigin: 'center'
            }}
          />

          {/* Center swipe feedback */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40">
            <div
              className={`bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-xl border border-gray-200 transition-all duration-200 ${
                swipeProgress > 0.7 ? 'swipe-feedback-active' : ''
              } ${((swipeDirection === 'left' && !canSwipeLeft) || (swipeDirection === 'right' && !canSwipeRight)) ? 'swipe-resistance' : ''}`}
              style={{
                opacity: Math.min(swipeProgress * 1.2, 1),
                transform: `scale(${0.8 + (swipeProgress * 0.4)})`
              }}
            >
              <div className="flex items-center space-x-3 text-sm font-medium">
                {swipeDirection === 'left' && canSwipeLeft && (
                  <>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-xs">
                      →
                    </div>
                    <div className="text-left">
                      <div className="text-gray-700 font-semibold capitalize">
                        {NAV_LINKS[currentIndex + 1]?.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {swipeProgress > 0.7 ? 'Release to navigate' : 'Keep swiping'}
                      </div>
                    </div>
                  </>
                )}
                {swipeDirection === 'right' && canSwipeRight && (
                  <>
                    <div className="text-right">
                      <div className="text-gray-700 font-semibold capitalize">
                        {NAV_LINKS[currentIndex - 1]?.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {swipeProgress > 0.7 ? 'Release to navigate' : 'Keep swiping'}
                      </div>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-xs">
                      ←
                    </div>
                  </>
                )}
                {((swipeDirection === 'left' && !canSwipeLeft) || (swipeDirection === 'right' && !canSwipeRight)) && (
                  <>
                    <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-xs">
                      ⚬
                    </div>
                    <span className="text-gray-500">End of sections</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Content with swipe transform effect */}
      <div
        className="h-full w-full transition-transform duration-100"
        style={{
          transform: isSwipeActive
            ? `translateX(${swipeDirection === 'left' ? -swipeProgress * 30 : swipeProgress * 30}px) scale(${1 - (swipeProgress * 0.02)})`
            : 'translateX(0) scale(1)',
          opacity: isSwipeActive ? 1 - (swipeProgress * 0.1) : 1
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default SwipeHandler;
