import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { 
  Layout, 
  Menu, 
  Input, 
  Typography, 
  Button,
  Dropdown,
} from 'antd';
import {
  FileTextOutlined, 
  RetweetOutlined, 
  PieChartOutlined,
  LineChartOutlined,
  TeamOutlined,
  BankOutlined,
  HomeOutlined,
   BookOutlined,
   SettingOutlined, 
   SafetyCertificateOutlined,
   AudioOutlined,
   PlusOutlined,
   DownOutlined,
   CalendarOutlined,
   EditOutlined,
  
  } from '@ant-design/icons';

const { Text } = Typography;
const { SubMenu } = Menu;
const { Header,  Sider } = Layout;

function handleClick(e) {
  console.log('click', e);
}

const { Search } = Input;

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

  class SidebarMenu extends React.Component {

  render () {
    return (

  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Search
      placeholder="Quick menu search..."
      onSearch={value => console.log(value)}
      style={{ width: 350, left: 300, margin: 10 }}
    />
    
      </Menu>
      
      <div className="card-container">
    
    <div className="button-container">
    <Button type="primary" icon={<PlusOutlined />}>
      Yeni tarife
    </Button>
    &nbsp;
    <Dropdown overlay={menu}> 
    <Button icon={<CalendarOutlined />}> 
        Bu Ay Temmuz <DownOutlined />
      </Button>
      </Dropdown>
      &nbsp;
      <Button icon={<EditOutlined />}>Düzenle</Button>
    
      </div>
  </div>
  
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
      <Menu onClick={handleClick} style={{ width: 201 }} mode="vertical">

      <div className="menu-search">
      <Search
      placeholder="Quick menu search..."
      onSearch={value => console.log(value)}
      style={{ width: 180, left: 7, top: 3 }}
    />
    </div>
    <SubMenu key="sub1" icon={<FileTextOutlined />} title="Offers">
      <Menu.ItemGroup title="Item 1">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="Item 2">
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </Menu.ItemGroup>
    </SubMenu>
    <SubMenu key="sub2" icon={<BookOutlined />} title="Bookings">
      <Menu.Item key="5">Option 5</Menu.Item>
      <Menu.Item key="6">Option 6</Menu.Item>
      <SubMenu key="sub3" title="Submenu">
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
      </SubMenu>
    </SubMenu>
    <SubMenu key="sub4" icon={<RetweetOutlined />} title="Rentals">
      <Menu.Item key="9">Option 9</Menu.Item>
      <Menu.Item key="10">Option 10</Menu.Item>
      <Menu.Item key="11">Option 11</Menu.Item>
      <Menu.Item key="12">Option 12</Menu.Item>
    </SubMenu>
    
    <SubMenu key="sub5" icon={<BankOutlined />} title="Rates / Policies">
      <Menu.Item key="9">Option 13</Menu.Item>
      <Menu.Item key="10">Option 14</Menu.Item>
      <Menu.Item key="11">Option 15</Menu.Item>
      <Menu.Item key="12">Option 16</Menu.Item>
    </SubMenu>

    <SubMenu key="sub6" icon={<TeamOutlined />} title="Customers">
      <Menu.Item key="9">Option 17</Menu.Item>
      <Menu.Item key="10">Option 18</Menu.Item>
      <Menu.Item key="11">Option 19</Menu.Item>
      <Menu.Item key="12">Option 20</Menu.Item>
    </SubMenu>
    <SubMenu key="sub7" icon={<LineChartOutlined />} title="Financials">
      <Menu.Item key="9">Option 21</Menu.Item>
      <Menu.Item key="10">Option 22</Menu.Item>
      <Menu.Item key="11">Option 23</Menu.Item>
      <Menu.Item key="12">Option 24</Menu.Item>
    </SubMenu>
    <SubMenu key="sub8" icon={<SafetyCertificateOutlined />} title="Fleet">
      <Menu.Item key="9">Option 25</Menu.Item>
      <Menu.Item key="10">Option 26</Menu.Item>
      <Menu.Item key="11">Option 27</Menu.Item>
      <Menu.Item key="12">Option 28</Menu.Item>
    </SubMenu>
    <SubMenu key="sub9" icon={<HomeOutlined />} title="Company">
      <Menu.Item key="9">Option 29</Menu.Item>
      <Menu.Item key="10">Option 30</Menu.Item>
      <Menu.Item key="11">Option 31</Menu.Item>
      <Menu.Item key="12">Option 32</Menu.Item>
    </SubMenu>

    <SubMenu key="sub10" icon={<PieChartOutlined />} title="Reports">
      <Menu.Item key="9">Option 33</Menu.Item>
      <Menu.Item key="10">Option 34</Menu.Item>
      <Menu.Item key="11">Option 35</Menu.Item>
      <Menu.Item key="12">Option 36</Menu.Item>
    </SubMenu>

    <SubMenu key="sub11" icon={<SettingOutlined />} title="Settings">
      <Menu.Item key="9">Option 37</Menu.Item>
      <Menu.Item key="10">Option 38</Menu.Item>
      <Menu.Item key="11">Option 39</Menu.Item>
      <Menu.Item key="12">Option 40</Menu.Item>
    </SubMenu>
  </Menu>
      </Sider>
      
    </Layout>
  </Layout>
    );
}
}

export default SidebarMenu;