import React from 'react';

class SocialLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.iconName = props.iconName;
    }

    render() {
        return (
            <i class={this.state.iconName}></i>
        )
    }

}

export default SocialLink
