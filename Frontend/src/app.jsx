import './app.css'
import Blogs from './comps/Blogs'
import Contact from './comps/Contact'
import Explore from './comps/Explore'
import Footer from './comps/Footer'
import Header from './comps/Header'
import ListTopics from './comps/ListTopics'
import Product from './comps/Product'
import Reviews from './comps/Reviews'
import Statistics from './comps/Statistics'
import WelcomeHero from './comps/WelcomeHero'
import Works from './comps/Works'

export function App() {

  return (
    <>
      <Header />
      <WelcomeHero />
      <ListTopics />
      <Works />
      <Explore />
      <Reviews />
      <Statistics />
      <Blogs />
      <Contact />
      {/* <Product /> */}
      <Footer />
    </>
  )
}
