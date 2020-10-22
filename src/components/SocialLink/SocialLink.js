import React from 'react';
import styles from './SocialLink.module.css';

class SocialLink extends React.Component {
    render() {
        return (
            <div className={styles.tooltip}>
                <span className={styles.tooltipText}> {this.props.tooltipText} </span>
                <a className={styles.linkElement} href={this.props.linkTarget} target="_blank" rel="noopener noreferrer">
                    <i className={this.props.iconName}></i>
                </a>
            </div>
        )
    }
}

export default SocialLink
