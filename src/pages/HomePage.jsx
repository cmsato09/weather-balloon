import React, { useState, useEffect } from 'react';
import MappingGlobe from '../components/globe.jsx';
import { fetchAPIData } from '../services/api.js';
import '../App.css';

function HomePage() {
  const [balloonData, setBalloonData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchAPIData();
        setBalloonData(data);
      } catch (error) {
        console.error("Error fetching balloon data:", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>24-Hour Path Visualization</h1>
      </header>
      <main>
        <MappingGlobe balloonData={balloonData} />
      </main>
    </div>
  );
}

export default HomePage;
