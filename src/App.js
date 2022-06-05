import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getFlightsData } from './getFlights';
import { createPortal } from 'react-dom';
function App() {
  const [places, setPlaces] = useState([])
  useEffect(() => {
    // getFlightsData('CDG', 'TUN').then(data => {
    //   setPlaces(data)
    //   console.log('p', data)
    // })
  }, [])

  return (
    <div className="App">
         <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}

export default App;
