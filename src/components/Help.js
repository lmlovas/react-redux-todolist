import React from 'react';
import Header from './Header';

class Help extends React.Component {
    componentDidMount() {
        document.title = 'Help | What to do?';
    }

    render() {
        return (
            <div className ="container">
                <Header tagline="Your questions will be answered here."/>
                <d1>
                    <dt>Where is the data stored?</dt>
                    <dd>We store all information in your browser's LocalStorage.</dd>
                </d1>
            </div>
        );
    }
}

export default Help;