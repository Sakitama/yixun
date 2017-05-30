import React, {Component} from 'react';
import PcIndex from './components/pcIndex';
import MobileIndex from './components/mobileIndex';
import MediaQuery from 'react-responsive';

class App extends Component {
    render() {
        return (
            <div className="App">
                <MediaQuery minDeviceWidth={1224}>
                    <PcIndex />
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1224}>
                    <MobileIndex />
                </MediaQuery>
            </div>
        );
    }
}

export default App;
