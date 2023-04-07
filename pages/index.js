import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navski from './comps/navbar'
import Marquee from './comps/marquee'
import { Text, Button } from "@nextui-org/react";
import dynamic from 'next/dynamic'
import Footer from './comps/footer'
import Background from '@/images/cloggybackground.png'

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
          <Marquee text="LIMITED TIME - EARLY BIRD OFFER ON KICKSTARTER COMING SOON &nbsp; &nbsp; &nbsp; &nbsp; LET'S GET CLOGGY &nbsp; &nbsp; &nbsp; &nbsp;"/>
          <Navski />
      </div>
      <div className={styles.scroller}>
           <section className={styles.child}>
            <div className={styles.top}>
              <div className={styles.wordstop}>
                <Text
                    h1
                    size={45}
                    css={{
                      textGradient: "45deg, $green600 -20%, $blue600 50%",
                    }}
                    weight="bold"
                  >
                    The only iPhone case you will ever need.
                </Text>
                <div className={styles.cloggy}>
                  <Image 
                    src={Background}
                    alt="Cloggy photo"
                    style={{
                      marginLeft: "15px", marginTop: "7rem"
                    }}
                    height={400}
                  />
                </div>
              </div>     
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
           <div className={styles.button}>
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
            </div>           
        </section>
      </div>
      {/* <main className={styles.main}>
      </main> */}
      {/* <Footer /> */}
    </>
  )
}
