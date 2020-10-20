import React from 'react';
import './App.css';
import Console from "./components/Console/Console"
import styles from './App.module.css';
import SocialLink from './components/SocialLink/SocialLink';

function App() {
  return (
    <div className="App">
      <div id='container'>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#3BB0BF', height: '100%', color: 'white', textShadow: '3px 3px red', fontWeight: 'bold', fontSize: '50px', fontFamily: 'Abel' }}>
          <div style={{ display: 'flex' }} >Hey, my name is Olli Havilehto</div>
          <div style={{ display: 'flex' }}>I do programming, IT architecture and DevOps stuff</div>
          <div style={{ display: 'flex' }}>I have MScs and possess multiple tech certifications. Check out my website!</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', color: 'white', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#47D3E6' }}>
            <div style={{ display: 'flex' }}>
              <a href="https://travis-ci.com/github/olli1337/homepage" target="_blank" rel="noopener noreferrer">
                <img src="https://travis-ci.com/olli1337/homepage.svg?branch=master" alt="build status" />
              </a>
              &nbsp;
              <SocialLink iconName="fab fa-linkedin" linkTarget={'https://www.linkedin.com/in/havilehto/'} tooltipText={'LinkedIn'} />
              &nbsp;
              <SocialLink iconName="fab fa-github" linkTarget={'https://github.com/olli1337'} tooltipText={'Github'} />
              &nbsp;
              <SocialLink iconName="fas fa-code" linkTarget={'https://leetcode.com/olli1337/'} tooltipText={'LeetCode'} />
            </div>
          </div>
          <div className={styles.displayConsole}>
            <Console />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
