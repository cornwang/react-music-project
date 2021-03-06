import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

class LayoutComponet extends Component {
    state = {
        key: '/'
    }
    componentWillMount(){
        this.setState({key: this.props.location.pathname});
    }
    handlerOnSelect = (item) => {
        this.props.history.push(item.key);
    }
    render() {
        const  {body} = this.props;
        return (
            <Layout>
                <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline"  onSelect= {this.handlerOnSelect} defaultSelectedKeys={[this.state.key]}>
                        <Menu.Item key="/">
                            <Icon type="user" />
                            <span className="nav-text">歌单管理</span>
                        </Menu.Item>
                        <Menu.Item key="/music">
                            <Icon type="video-camera" />
                            <span className="nav-text">歌曲管理</span>
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: 200 }}>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                                hello
                              {body}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        ©2018 Created by Ant UED
      </Footer>
                </Layout>
            </Layout> 
        );
    }
}

export default withRouter(LayoutComponet);