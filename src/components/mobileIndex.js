import React, { Component } from 'react';
import MobileHeader from './mobileHeader';
import MobileFooter from './mobileFooter';

class MobileIndex extends Component {
    render() {
        return (
            <div className="mobile-index">
                <MobileHeader />
                <MobileFooter />
            </div>
        );
    }
}

export default MobileIndex;