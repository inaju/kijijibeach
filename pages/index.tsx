import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import FooterCta from '../components/FooterCta'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import Vacation from '../components/Vacation'
import Welcome from '../components/welcome'
import SocialFooter from '../components/SocialFooter'
import styles from '../styles/Home.module.css'

export default function Home() {
  const beachName = 'Kijiji Beach'
  return (
    <div >
      <Head>
        <title>Kijiji Beach</title>
        <meta name="description" content="best beach" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero beachName={beachName} />
      <div className='max-w-[400px] m-auto px-4 sm:max-w-full sm:px-10 md:px-18 md:max-w-[1140px] '>

        <Welcome beachName={beachName} />
        <Vacation beachName={beachName} />
        <Testimonials />

      </div>
      <FooterCta />
      <div className='max-w-[400px] m-auto px-4 md:max-w-[1140px]'>

        <Footer beachName={beachName} />

      </div>
      <SocialFooter beachName={beachName} />
      
    </div>
  )
}
