import React from 'react';
import MappingGlobe from './components/globe.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>24-Hour Path Visualization</h1>
      </header>
      <main>
        <MappingGlobe />
      </main>
    </div>
  );
}

export default App;
