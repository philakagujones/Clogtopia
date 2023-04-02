import React from 'react';
import styles from '@/styles/Marquee.module.css';

export default function Marquee(props) {
  return (
    <div className={styles['custom-marquee-container']}>
      <div className={styles['custom-marquee-text']}>{props.text}</div>
      <div className={styles['custom-marquee-text1']}>{props.text}</div>
      <div className={styles['custom-marquee-text2']}>{props.text}</div>
      <div className={styles['custom-marquee-text3']}>{props.text}</div>
      <div className={styles['custom-marquee-text4']}>{props.text}</div>
      <div className={styles['custom-marquee-text5']}>{props.text}</div>
    </div>
  );
}