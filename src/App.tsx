import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import logo from './logo.svg';
import './App.css';

// Définir le type pour la grille
type Grid = number[][];

const App: React.FC = () => {
  const [grid, setGrid] = useState<Grid>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    // Fetch initial grid state from the backend
    axios.get('/api/simulation/init').then(response => {
      setGrid(response.data as Grid);
    });
  }, []);

  const stepSimulation = () => {
    axios.post('/api/simulation/step').then(response => {
      setGrid(response.data as Grid);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={"./logo.png"} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Forest Fire Simulation</h1>
      <div>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex' }}>
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: cell === 1 ? 'red' : cell === 2 ? 'gray' : 'green',
                  border: '1px solid black'
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={stepSimulation} disabled={isRunning}>
        Step
      </button>
    </div>
  );
};

export default App;
