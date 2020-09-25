import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { 
  Layout, 
  Menu, 
  Breadcrumb, 
  Typography, 
} from 'antd';
import {
   SettingOutlined, 
   AudioOutlined,
   MailOutlined,
   AppstoreOutlined,
  
  } from '@ant-design/icons';

const { Text } = Typography;
const { SubMenu } = Menu;

function handleClick(e) {
  console.log('click', e);
}

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
  );

  class RTMenu extends React.Component {

  render () {
    return (

 
      
    <Layout style={{ padding: '0 20px 24px' }}>

         <div className="breadcrumb-container">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Rate</Breadcrumb.Item>
          <Breadcrumb.Item>RT2553 tarife</Breadcrumb.Item>
        </Breadcrumb>
        </div>



        <div className="site-demo-card">
        <div className="text-title-rt">
        <Text><b>#RT2553</b> nolu tarife detayı</Text>
        </div>
        <Menu onClick={handleClick} style={{ width: 190}} mode="vertical">
    <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
      <Menu.ItemGroup title="Item 1">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="Iteom 2">
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </Menu.ItemGroup>
    </SubMenu>
    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
      <Menu.Item key="5">Option 5</Menu.Item>
      <Menu.Item key="6">Option 6</Menu.Item>
      <SubMenu key="sub3" title="Submenu">
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
      </SubMenu>
    </SubMenu>
    <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
      <Menu.Item key="9">Option 9</Menu.Item>
      <Menu.Item key="10">Option 10</Menu.Item>
      <Menu.Item key="11">Option 11</Menu.Item>
      <Menu.Item key="12">Option 12</Menu.Item>
    </SubMenu>
  </Menu>
  </div>

      
  </Layout>
    )
}
}

export default RTMenu;