import React from 'react';
import logo from './logo.svg';
import './App.css';
import Console from "./components/Console"

function App() {
  return (
    <div className="App">
      <div id='container'>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', backgroundColor: 'lightgreen' }} >Hey, my name is Olli Havilehto</div>
          <div style={{ display: 'flex', backgroundColor: 'white' }}>I do programming, IT architecture and DevOps stuff</div>
          <div style={{ display: 'flex', backgroundColor: 'cyan' }}>I have MScs and possess multiple tech certifications. Check out my website!</div>
        </div>
        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Console />
        </div>
      </div>
    </div>
  );
}

export default App;
