import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navski from './comps/navbar'
import Marquee from './comps/marquee'
import { Text, Button } from "@nextui-org/react";
import dynamic from 'next/dynamic'
import Footer from './comps/footer'

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Marquee text="LIMITED TIME - 20% OFF TWO CASES ON KICKSTARTER &nbsp; &nbsp; &nbsp; &nbsp; LET'S GET CLOGGY &nbsp; &nbsp; &nbsp; &nbsp;"/>
      <Navski />
      <main className={styles.main}>
        <div className={styles.words}>
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
        </div>
          <div className={styles.animation}>
            <Model />
          </div>
          <div className={styles.button}>
            <Button shadow color="gradient">
              Kickstarter Campaign
            </Button>
          </div>
          <div className={styles.words}>
          <Text
            h1
            size={45}
            color="white"
            weight="bold"
          >
            Stay tuned.
          </Text>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  )
}
