import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Clogtopia</title>
        <meta name="description" content="Clogtopia is home to the greatest phone cases and charms in existence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>the future is near.</div>
      </main>
    </>
  )
}
