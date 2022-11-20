import {
    DesktopOutlined, FileOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined, PieChartOutlined, TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import type {MenuProps} from 'antd';
import React, {useState} from 'react';

const {Header, Sider, Content} = Layout;
import "./index.less"
import {Outlet, useNavigate} from "react-router-dom";
import {CommonUtils} from "../../utils";

import {connect} from "react-redux"

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('仪表盘', 'dashboard', <PieChartOutlined/>),
    getItem('文章管理', 'article', <UserOutlined/>, [
        getItem('文章列表', 'article/article-list'),
        getItem('添加文章', 'article/article-add'),
        getItem('草稿箱', 'article-draft'),
        getItem('文章归类', 'article-class')
    ]),
    getItem('标签管理', 'tags', <TeamOutlined/>, [
        getItem('全部标签', 'tags-list'),
        getItem('新增标签', 'tags-add')
    ]),
    getItem('友情连接', 'links', <FileOutlined/>),
    getItem('评论管理', 'comment', <FileOutlined/>),
    getItem('音乐管理', 'music', <FileOutlined/>, [
        getItem('音列表乐', 'music-list'),
        getItem('添加音乐', 'music-add'),
    ]),
    getItem('用户管理', 'user', <DesktopOutlined/>),
    getItem('个人信息', 'personal', <FileOutlined/>),

];

const App: React.FC = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const Navigate = useNavigate()
    const onClick = (e: any) => {
        console.log('e', e)
        Navigate(e.key)
    }
    const onOpenChange = (openKeys: any) => {
        console.log("SubMenu 展开/关闭的回调", openKeys)
    }
    const onSelect = (e: any) => {
        console.log("被选中时调用")
    }
    console.log("this",props)
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" style={{height: 60}}/>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={items}
                    onClick={onClick}
                    onSelect={onSelect}
                    onOpenChange={onOpenChange}
                />
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{
                    padding: 0,
                    background: "#fff",
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row'
                }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    <div style={{height: 40}}>头像</div>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
};
// 1. 调用connect 方法订阅store , store 改变 更新view
// 2. connect获取store中状态 将通过组件props映射给组件
// 3. connect或者dispatch方法 
const mapStoreToProps = () => {
    
}
export default connect()(App);