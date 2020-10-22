import React from 'react';
import './App.css';
import Console from "./components/Console/Console"
import styles from './App.module.css';
import SocialLink from './components/SocialLink/SocialLink';
import socialLinkStyles from './components/SocialLink/SocialLink.module.css'

function App() {
  return (
    <div className="App">
      <div id='container'>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', backgroundColor: '#5CDB95',  color: '#EDF5E1', fontWeight: 'bold', fontSize: '50px', fontFamily: 'Abel' }}>

          <div className='avatarWrapper'>
            <img src={'/img/avatar.png'} alt='Avatar' className='avatar' />
          </div>
          <div style={{ display: 'flex' }} >Hey, my name is Olli Havilehto</div>
          <div style={{ display: 'flex' }}>I do IT Architecture, programming, and DevOps stuff</div>
          <div style={{ display: 'flex' }}>~~~~~~</div>
        </div>
        <div style={{ display: 'flex', color: 'white', width: '100%',  justifyContent: 'space-evenly', backgroundColor: '#5CDB95' }}>
            <SocialLink iconName="fab fa-linkedin" linkTarget={'https://www.linkedin.com/in/havilehto/'} tooltipText={'LinkedIn'} />
            <SocialLink iconName="fab fa-github" linkTarget={'https://github.com/olli1337'} tooltipText={'Github'} />
            <SocialLink iconName="fas fa-code" linkTarget={'https://leetcode.com/olli1337/'} tooltipText={'LeetCode'} />
            <SocialLink iconName="fab fa-google-play" linkTarget={'https://play.google.com/store/apps/developer?id=Havilehto+Technologies+Shaping+Your+Future&hl=fi'} tooltipText={'Google Play'} />
            <SocialLink iconName="fas fa-desktop" linkTarget={'https://www.google.fi'} tooltipText={'Web apps'} />
        </div>
      </div>
    </div>
  );
}

export default App;

/*
          <div className={styles.displayConsole}>
            <Console />
          </div>
          */

/*
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
</div>
*/



/*

          <div className={socialLinkStyles.tooltip}>
            <span class={socialLinkStyles.tooltipText}> Travis CI </span>
            <a href="https://travis-ci.com/github/olli1337/homepage" target="_blank" rel="noopener noreferrer">
              <img src="https://travis-ci.com/olli1337/homepage.svg?branch=master" alt="build status" />
            </a>
          </div>

*/