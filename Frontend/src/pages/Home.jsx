import React from 'react'
import WelcomeHero from '../comps/WelcomeHero'
import ListTopics from '../comps/ListTopics'
import Works from '../comps/Works'
import Explore from '../comps/Explore'
import Reviews from '../comps/Reviews'
import Statistics from '../comps/Statistics'
import Blogs from '../comps/Blogs'
import Contact from '../comps/Contact'
import Header from '../comps/Header'
import Footer from '../comps/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <WelcomeHero />
      <ListTopics />
      <Works />
      <Explore />
      {/* <Reviews /> */}
      <Statistics />
      <Blogs />
      <Contact />
      <Footer />
    </>
  )
}
