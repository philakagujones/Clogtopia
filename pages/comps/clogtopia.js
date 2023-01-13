import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Clogtopia.module.css'

export default function Clogtopia() {
  return (
    <div className={styles.centertext}>
          <span>
            <Link style={{textDecoration: 'none', color: 'white'}} href="/">
              <h1>CLOG CASE</h1>
              <h4>SHOP NOW</h4>
            </Link>
          </span>
        </div>
  )
}