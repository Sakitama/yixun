import React, { Component } from 'react';
import { Row, Col, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import logo from '../images/logo.png';
import '../css/pcHeader.css';

class PcHeader extends Component {
    state = {
        current: 'headlines',
    };
    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <div className="pc-header">
                <Row>
                    <Col span={2} />
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src={logo} alt="logo" />
                            <span>React News</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="headlines">
                                <Icon type="appstore" />头条
                            </Menu.Item>
                            <Menu.Item key="society">
                                <Icon type="appstore" />社会
                            </Menu.Item>
                            <Menu.Item key="domestic">
                                <Icon type="appstore" />国内
                            </Menu.Item>
                            <Menu.Item key="international">
                                <Icon type="appstore" />国际
                            </Menu.Item>
                            <Menu.Item key="entertainment">
                                <Icon type="appstore" />娱乐
                            </Menu.Item>
                            <Menu.Item key="sports">
                                <Icon type="appstore" />体育
                            </Menu.Item>
                            <Menu.Item key="technology">
                                <Icon type="appstore" />科技
                            </Menu.Item>
                            <Menu.Item key="fashion">
                                <Icon type="appstore" />时尚
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={2} />
                </Row>
            </div>
        );
    }
}

export default PcHeader;
