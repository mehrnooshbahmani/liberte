import React from 'react';
import './App.css';
// @ts-ignore
import   liberte from './liberte.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={liberte} alt='woman-life-freedom' width={250} height={250}/>
        <p>
          Liberté
        </p>
      </header>
    </div>
  );
}

export default App;
