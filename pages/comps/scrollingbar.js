import React, { useState, useRef, useEffect } from 'react';
import styles from '@/styles/ScrollingBar.module.css'

export default function ScrollingBar() {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef(null);
  
  useEffect(() => {
    const marquee = marqueeRef.current;
    let animationId;
    
    const animate = () => {
      if (!isPaused) {
        marquee.scrollLeft += 2;
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);
  
  const handleMouseEnter = () => {
    setIsPaused(true);
  };
  
  const handleMouseLeave = () => {
    setIsPaused(false);
  };
  return (
    <div
      className="marquee"
      ref={marqueeRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p>FREE SHIPPING ON U.S. ORDERS OVER $100 + INTL ORDER OVER $200</p>
      <p className="spacer">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
      <p>FREE SHIPPING ON U.S. ORDERS OVER $100 + INTL ORDER OVER $200</p>
    </div>
  );
}