import React from 'react';
import './App.css';
import SocialLink from './components/SocialLink/SocialLink';

function App() {
  return (
    <div className={'App'}>
      <div id='container'>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', backgroundColor: '#203647', color: '#EEFBFB', fontWeight: 'bold', fontSize: '45px', fontFamily: 'Abel', marginBottom: '20px' }}>
          <div style={{ display: 'flex' }}>
            <div className={'avatarWrapper'}>
              <img src={'/img/avatar.png'} alt='Avatar' className='avatar' />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
            <div style={{ display: 'flex', margin: '0px 5px 0 5px', textShadow: '2px 2px black' }} >Hey, my name is Olli Havilehto.</div>
            <div style={{ display: 'flex', margin: '0px 5px 0 5px', textShadow: '2px 2px black' }}>I do IT architecture, programming, and DevOps stuff.</div>
          </div>
        </div>
        <div className={'SocialLinkWrapper'}>
          <SocialLink iconName="fab fa-linkedin" linkTarget={'https://www.linkedin.com/in/havilehto/'} tooltipText={'LinkedIn'} />
          <SocialLink iconName="fab fa-github" linkTarget={'https://github.com/olli1337'} tooltipText={'Github'} />
          <SocialLink iconName="fas fa-code" linkTarget={'https://leetcode.com/olli1337/'} tooltipText={'LeetCode'} />
          <SocialLink iconName="fab fa-google-play" linkTarget={'https://play.google.com/store/apps/developer?id=Havilehto+Technologies+Shaping+Your+Future&hl=fi'} tooltipText={'Google Play'} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', backgroundColor: '#203647', color: '#EEFBFB', fontWeight: 'bold', fontSize: '30px', fontFamily: 'Abel', marginTop: '20px'  }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden'}}>
            <div style={{ display: 'flex', margin: '0px 5px 0 5px', textShadow: '2px 2px black' }} >I have Master in Computer Science and I am Azure, Scrum, DevOps & ITIL certified.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
