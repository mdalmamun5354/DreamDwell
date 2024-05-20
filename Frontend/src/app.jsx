import React, { useState, useEffect, createContext, useContext } from "react";
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import axios from 'axios';
import './app.css';
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import Login from "./pages/Login";

// Create context
const AppContext = createContext();

export function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/hotel',
      element: <Hotel />
    },
    {
      path: '/contact',
      element: <h2>This is contact page</h2>
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/dashboard',
      element: <>
        <h2>This is dashboard page</h2>
        <Link to='/'>Home</Link>
      </>
    },
  ])


  const [user, setUser] = useState(null)
  const [hotels, setHotels] = useState([]);
  const [item, setItem] = useState(hotels[0]);

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
    <AppContext.Provider value={{ hotels, setHotels, item, setItem, user, setUser }}>
      <RouterProvider router={router} />
      <Toaster />
    </AppContext.Provider>
  );
}

// Custom hook to use context
export function useAppContext() {
  return useContext(AppContext);
}
