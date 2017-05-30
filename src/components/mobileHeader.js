import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../css/mobileHeader.css';

class MobileHeader extends Component {
    render() {
        return (
            <div className="mobile-header">
                <a href="/" className="logo">
                    <img src={logo} alt="logo" />
                    <span>React News</span>
                </a>
            </div>
        );
    }
}

export default MobileHeader;
