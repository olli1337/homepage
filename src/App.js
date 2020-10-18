import React from 'react';
import './App.css';
import Console from "./components/Console"

function App() {
  return (
    <div className="App">
      <div id='container'>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#3BB0BF', height: '100%' }}>
          <div style={{ display: 'flex' }}><img src="https://travis-ci.com/olli1337/homepage.svg?branch=master" alt="build status" /> </div>
          <div style={{ display: 'flex', backgroundColor: 'lightgreen' }} >Hey, my name is Olli Havilehto</div>
          <div style={{ display: 'flex', backgroundColor: 'white' }}>I do programming, IT architecture and DevOps stuff</div>
          <div style={{ display: 'flex', backgroundColor: 'cyan' }}>I have MScs and possess multiple tech certifications. Check out my website!</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', color: 'white', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#47D3E6' }}>
            moimoi
            </div>
          <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%', justifyContent: 'center', backgroundColor: '#143B40' }}>
            <Console />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
