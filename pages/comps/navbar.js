import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar} id='navbar'>
        <div className={styles.navleft}>
          <Link className={styles.link} href="/shop">CASES</Link>
          <Link className={styles.link} href="/lookbook">CHARMS</Link>
        </div>
        
        <div className={styles.navmid}>
          <Link style={{textDecoration: 'none', color: 'white'}} href="/">
            <h3 className={styles.latter}>CLOGTOPIA</h3>
            <h3 className={styles.lattermobile}>CLOG</h3>
          </Link>
        </div>
        
        
        <div className={styles.navright}>
          <Link className={styles.link} href="/about">SALE</Link>
          <Link className={styles.link} href="/">CART (0)</Link>
        </div>
    </div>
  )
}
