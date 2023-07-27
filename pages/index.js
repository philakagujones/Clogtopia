import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navski from './comps/navbar'
import Marquee from './comps/marquee'
import { Text, Button } from "@nextui-org/react";
import dynamic from 'next/dynamic'
import Footer from './comps/footer'
import Background from '@/images/cloggybackground.png'
import Mail from './comps/mail'

const Model = dynamic(
  () => import('./comps/model'),
  { ssr: false }
)

export default function Home() {
  return (
    <>
      <Head>
        <title>Clogtopia</title>
        <meta name="description" content="Clogtopia is home to the greatest phone cases and charms in existence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFFFFF" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.sticky}>
          <Marquee text="EARLY BIRD PREORDERS AVAILABLE NOW &nbsp; &nbsp; &nbsp; &nbsp; FREE NA SHIPPING ON ORDERS $100+ &nbsp; &nbsp; &nbsp; &nbsp;"/>
          <Navski />
      </div>
      <div className={styles.scroller}>
           <section className={styles.child}>
            <div className={styles.top}>
              <div className={styles.wordstop}>
                <Text
                    h1
                    size={30}
                    css={{
                      textGradient: "45deg, $green600 -20%, $blue600 50%",
                      '@xs': {
                        color: '$blue100',
                      },
                      '@sm': {
                        color: '$yellow100',
                      },
                      '@md': {
                        fontSize: 'md',
                      },
                      '@lg': {
                        fontSize: 'xl'
                      },
                      margin: "1rem"
                    }}
                    weight="bold"
                  >
                    The only iPhone case you will ever need.
                </Text>
                <Text
                    h1
                    size={28}
                    css={{
                      // textGradient: "45deg, $green600 -20%, $blue600 50%",
                      color: "Black"
                    }}
                    weight="normal"
                  >
                    Our innovative cases feature carefully crafted holes that allow you to add your favorite charms, turning your phone into a stylish accessory that's uniquely you. <br/>
                    Keep your phone safe while expressing your individuality with our charming cases!
                </Text>
              </div>  
                {/* <div className={styles.cloggy}>
                  <Image 
                    src={Background}
                    alt="Cloggy photo"
                    style={{
                      marginLeft: "15px", marginTop: "7rem"
                    }}
                    height={400}
                  />
                </div> */}   
            </div>      
           </section>
           <section className={styles.child}>
              <div className={styles.animation}>
                <div className={styles.spacerwords}>
                    <Text
                      h1
                      size={45}
                      css={{
                        textGradient: "45deg, $green600 -20%, $blue600 50%",
                      }}
                      weight="bold"
                    >
                    Give &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; a try.
                  </Text>
                </div>
                <Model />
              </div>           
           </section>
           <section className={styles.child}>
            <Mail/>
           {/* <div className={styles.button}>
                <Button shadow color="gradient">
                  Kickstarter Campaign
                </Button>
              </div>
              <div className={styles.words}>
              <Text
                h1
                size={45}
                color="black"
                weight="bold"
              >
                Stay tuned.
              </Text>
            </div>            */}
        </section>
      </div>
      {/* <main className={styles.main}>
      </main> */}
      {/* <Footer /> */}
    </>
  )
}
