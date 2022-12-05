import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Vacation from '../components/Vacation'
import Welcome from '../components/welcome'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Kijiji Beach</title>
        <meta name="description" content="best beach" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Navbar />
     <Hero />
     <Welcome />
     <Vacation />
    </div>
  )
}
