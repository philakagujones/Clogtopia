import React from 'react'
import Link from 'next/link'
import styles from  '@/styles/Footer.module.css'

// import { UilInstagram, UilTwitter, UilFacebookF } from '@iconscout/react-unicons'

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.words}>
          <ul>
            <li>
              <Link className={styles.link} href="/sizes">SIZES</Link>
            </li>
            <li>
              <Link className={styles.link} href="/privacy">PRIVACY</Link>
            </li>
            <li>
              <Link className={styles.link} href="/terms">TERMS</Link>
            </li>
            <li>
              <Link className={styles.link} href="/faq">FAQ</Link>
            </li>
          </ul>
      </div>
      <div className="icons">
          <a  href={'https://instagram.com/latterhouseco'} 
              target={'_blank'}
              rel={'noopener noreferrer'}>
                  <div className={styles.instagram}>
                  {/* < UilInstagram size='1rem' />  */} ahh
                  </div>
          </a>
          <a  href={'https://twitter.com/philakagujones'} 
              target={'_blank'}
              rel={'noopener noreferrer'}>
                  <div className={styles.twitter}>
                    {/* <UilTwitter size='1rem'/>  */} ahh
                  </div>
          </a>
          <a  href={'https://www.facebook.com/latterhouseco'} 
              target={'_blank'}
              rel={'noopener noreferrer'}>
                  <div className={styles.facebook}>
                    {/* <UilFacebookF size='1rem'/>  */} ahh
                  </div>
          </a>
      </div>
    </div> 
  )
}

export default Footer