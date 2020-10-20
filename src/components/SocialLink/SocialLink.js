import React from 'react';
import styles from './SocialLink.module.css';

class SocialLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <div className={styles.tooltip}>
                <span class={styles.tooltipText}> {this.state.tooltipText} </span>
                <a className={styles.linkElement} href={this.state.linkTarget} target="_blank" rel="noopener noreferrer">
                    <i class={this.state.iconName}></i>
                </a>
            </div>
        )
    }
}

export default SocialLink
