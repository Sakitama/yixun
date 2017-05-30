import React, { Component } from 'react';
import PcHeader from './pcHeader';
import PcFooter from './pcFooter';

class PcIndex extends Component {
    render() {
        return (
            <div className="pc-index">
                <PcHeader />
                <PcFooter />
            </div>
        );
    }
}

export default PcIndex;
