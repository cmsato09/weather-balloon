import React, { useState, useEffect } from 'react';
import PathGlobe from '../components/pathglobe.jsx';
import { fetch24HrAPIData } from '../services/api.js';
import '../App.css';

function HomePage() {
  const [balloonData, setBalloonData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch24HrAPIData();
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
        <PathGlobe balloonsData={balloonData} />
      </main>
    </div>
  );
}

export default HomePage;
