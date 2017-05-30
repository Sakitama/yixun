import React, { Component } from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import '../css/pcFooter.css';

class PcFooter extends Component {
    render() {
        return (
            <div className="pc-footer">
                <Row>
                    <Col span={2} />
                    <Col span={20} className="rights">
                        &copy;&nbsp;2017 React News. All Rights Reserved.
                    </Col>
                    <Col span={2} />
                </Row>
            </div>
        );
    }
}

export default PcFooter;
