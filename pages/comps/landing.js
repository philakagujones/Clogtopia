import React from 'react'
import styles from '../../styles/Landing.module.css'
import Navbar from './navbar'
import Clogtopia from './clogtopia';

export default function Landing() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Navbar />
        <Clogtopia />
      </div>
    </div>
  )
}
