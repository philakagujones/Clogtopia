import React from 'react'
import Footer from './comps/footer'
import Navbar from './comps/navbar'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <>
      <Navbar /> 
      <div className={styles.container}>
        <div className={styles.text}>
          <p>
            LATTER HOUSE IS A LIVING BREATHING ENTITY EMERGING FROM VANCOUVER, BC. OUR TEAM IS DEDICATED TO PROVIDING THE 
            BRIDGE BETWEEN STREETWEAR AND LUXURY. WE INVITE YOU ON THIS JOURNEY WITH US AND HOPEFULLY YOU ENJOY THE PIECES WE CREATE AS WELL
            AS THE STORIES. 
            <br />
            <br />
            THE GLORY OF THE LATTER HOUSE SHALL BE GREATER THAN OF THE FORMER
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}
