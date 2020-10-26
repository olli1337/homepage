import React from 'react';
import styles from './SocialLink.module.css';

class SocialLink extends React.Component {
    render() {
        return (
            <div className={styles.socialLinkWrapper}>
                <a className={styles.linkElement} href={this.props.linkTarget} target="_blank" rel="noopener noreferrer">
                    <i className={this.props.iconName}></i>
                </a>
                <span className={styles.linkElementTitle}>{this.props.tooltipText}</span> 
            </div>
        )
    }
}

export default SocialLink
