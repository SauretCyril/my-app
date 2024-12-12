import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// Définir le type pour la grille
type Grid = number[][];

const App: React.FC = () => {
  const [grid, setGrid] = useState<Grid>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // Fetch initial grid state from the backend
    const fetchInitialGrid = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('http://localhost:8080/api/simulation/init');
        setGrid(response.data as Grid);
        setError('');
      } catch (error) {
        console.error('Error fetching initial grid:', error);
        setError('Failed to load initial grid. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchInitialGrid();
  }, []);

  const stepSimulation = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/api/simulation/step');
      setGrid(response.data as Grid);
      setError('');
    } catch (error) {
      console.error('Error stepping simulation:', error);
      setError('Failed to step simulation. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetSimulation = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/api/simulation/init');
      setGrid(response.data as Grid);
      setError('');
    } catch (error) {
      console.error('Error resetting simulation:', error);
      setError('Failed to reset simulation. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={"./logo.png"} className="App-logo" alt="logo" /> */}
        <h2 className='title' >Simulation of the spread of a forest fire</h2>
        {error && (
          <div style={{ color: 'red', margin: '15px', padding: '15px' }}>
            {error}
          </div>
        )}
        <div className="isLoading"> {isLoading && <div>Loading...</div>} </div>
        
      </header>
        <div className="play-ground">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: 'flex' }}>
              {row.map((cell, cellIndex) => (
                <div
                  key={cellIndex}
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: cell === 1 ? 'red' : cell === 2 ? 'black' : cell ===3 ? 'orange' :'green',
                    border: '1px solid black'
                  }}
                ></div>
              ))}
            </div>
          ))}
         <div className="bloc-button">
          <button onClick={stepSimulation} disabled={isLoading}>
            Step
          </button>
          <button onClick={resetSimulation} disabled={isLoading}>
            Reset
          </button>
        </div>
        </div>

    </div>
  );
};

export default App;
