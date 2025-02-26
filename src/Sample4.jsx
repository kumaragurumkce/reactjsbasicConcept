import React, { useState, useRef, useEffect } from 'react';

function ThrottledScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const throttledScroll = useRef(null);

  const throttle = (func, delay) => {
    let lastCall = 0;
    return (...args) => {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      func(...args);
    };
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
    
    throttledUpdate();
  };
console.log(handleScroll,);

  const updateScrollPosition = () => {
    console.log('Scroll position:', window.scrollY); // Simulate updating scroll-related UI
    
    // in a real app, you would update UI based on scroll position.
  };

  useEffect(() => {
    throttledScroll.current = throttle(updateScrollPosition, 200);
    window.addEventListener('scroll', handleScroll);
console.log('useeffect up');

    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('useeffect clean');

    };
  }, []);

  const throttledUpdate = useRef(throttledScroll.current).current;

  return (
    <div style={{ height: '2000px', overflow: 'auto' }}>
      <p>Scroll Position: {scrollPosition}</p>
    </div>
  );
}

export default ThrottledScroll;