import React from 'react';
import styles from '@/styles/ScrollingBar.module.css'

const ScrollingBar = ({ children }) => {
  return (
    <div className={styles.marquee}>
      <div className={styles.marquee__content}>{children}</div>
    </div>
  );
};

export default ScrollingBar;