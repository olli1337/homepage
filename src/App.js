import React from 'react';
import './App.css';
import SocialLink from './components/SocialLink/SocialLink';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.avatarWrapper}>
            <img src={'/img/avatar.png'} alt='Avatar' className='avatar' />
          </div>
          <div className={styles.topSectionTitle}>
            <div className={styles.topSectionTitleText}>Hey, my name is Olli Havilehto.</div>
            <div className={styles.topSectionTitleText}>I do IT architecture, programming, and DevOps stuff.</div>
          </div>
        </div>
        <div className={styles.SocialLinkWrapper}>
          <SocialLink iconName="fab fa-linkedin" linkTarget={'https://www.linkedin.com/in/havilehto/'} tooltipText={'LinkedIn'} />
          <SocialLink iconName="fab fa-github" linkTarget={'https://github.com/olli1337'} tooltipText={'Github'} />
          <SocialLink iconName="fas fa-code" linkTarget={'https://leetcode.com/olli1337/'} tooltipText={'LeetCode'} />
          <SocialLink iconName="fab fa-google-play" linkTarget={'https://play.google.com/store/apps/developer?id=Havilehto+Technologies+Shaping+Your+Future&hl=fi'} tooltipText={'Google Play'} />
        </div>
        <div className={styles.bottomSectionTitle}>
          <div >
            <div className={styles.bottomSectionTitleText}>I have Master in Computer Science and I am Azure, Scrum, DevOps & ITIL certified.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
