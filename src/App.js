import React, {Component} from 'react';
import PcHeader from './components/pcHeader';
import MobileHeader from './components/mobileHeader';
import MediaQuery from 'react-responsive';

class App extends Component {
    render() {
        return (
            <div className="App">
                <MediaQuery minDeviceWidth={1224}>
                    <PcHeader />
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1224}>
                    <MobileHeader />
                </MediaQuery>
            </div>
        );
    }
}

export default App;
