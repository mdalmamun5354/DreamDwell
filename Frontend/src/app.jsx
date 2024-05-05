import React, { useState, useEffect, createContext, useContext } from "react";
import axios from 'axios';
import './app.css';
import Blogs from './comps/Blogs';
import Contact from './comps/Contact';
import Explore from './comps/Explore';
import Footer from './comps/Footer';
import Header from './comps/Header';
import ListTopics from './comps/ListTopics';
import Product from './comps/Product';
import Reviews from './comps/Reviews';
import Statistics from './comps/Statistics';
import WelcomeHero from './comps/WelcomeHero';
import Works from './comps/Works';

// Create context
const AppContext = createContext();

export function App() {
  const [root, setRoot] = useState("Home");
  const [hotels, setHotels] = useState([]);
  const [item, setItem] = useState();

  // get data
  useEffect(() => {
    const getHotels = async () => {
      try {
        const res = await axios.get("http://localhost:3000/hotels");
        setHotels(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getHotels();
  }, []);

  return (
    <AppContext.Provider value={{ root, setRoot, hotels, setHotels, item, setItem}}>
      <Header />
      {(() => {
        switch (root) {
          case 'Product':
            return <Product />;
          default:
            return (
              <>
                <WelcomeHero />
                <ListTopics />
                <Works />
                <Explore />
                {/* <Reviews /> */}
                <Statistics />
                <Blogs />
                <Contact />
              </>
            );
        }
      })()}
      <Footer />
    </AppContext.Provider>
  );
}

// Custom hook to use context
export function useAppContext() {
  return useContext(AppContext);
}
