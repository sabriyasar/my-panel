import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  FileTextOutlined, 
  RetweetOutlined, 
  PieChartOutlined,
  LineChartOutlined,
  EnvironmentOutlined,
  TeamOutlined,
  BankOutlined,
  HomeOutlined,
   BookOutlined,
   SettingOutlined, 
   SafetyCertificateOutlined,
   GlobalOutlined,
  
  } from '@ant-design/icons';
import { Tabs } from 'antd';
import { Typography } from 'antd';
import { Statistic, Card, Row, Col } from 'antd';
import Charts from './chart/chart';

const { Text } = Typography;
const { TabPane } = Tabs;
const { SubMenu } = Menu;
const { Header,  Sider } = Layout;

function handleClick(e) {
  console.log('click', e);
}

ReactDOM.render(
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
      <div className="card-container">
    <Tabs type="card">
      <TabPane tab="Tab Title 1" key="1">
     
      </TabPane>
      <TabPane tab="Tab Title 2" key="2">
   
      </TabPane>
      <TabPane tab="Tab Title 3" key="3">
      
      </TabPane>
    </Tabs>
  </div>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
      <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
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
    <SubMenu key="sub3" icon={<RetweetOutlined />} title="Rentals">
      <Menu.Item key="9">Option 9</Menu.Item>
      <Menu.Item key="10">Option 10</Menu.Item>
      <Menu.Item key="11">Option 11</Menu.Item>
      <Menu.Item key="12">Option 12</Menu.Item>
    </SubMenu>
    
    <SubMenu key="sub4" icon={<BankOutlined />} title="Rates / Policies">
      <Menu.Item key="9">Option 13</Menu.Item>
      <Menu.Item key="10">Option 14</Menu.Item>
      <Menu.Item key="11">Option 15</Menu.Item>
      <Menu.Item key="12">Option 16</Menu.Item>
    </SubMenu>

    <SubMenu key="sub5" icon={<TeamOutlined />} title="Customers">
      <Menu.Item key="9">Option 17</Menu.Item>
      <Menu.Item key="10">Option 18</Menu.Item>
      <Menu.Item key="11">Option 19</Menu.Item>
      <Menu.Item key="12">Option 20</Menu.Item>
    </SubMenu>
    <SubMenu key="sub6" icon={<LineChartOutlined />} title="Financials">
      <Menu.Item key="9">Option 21</Menu.Item>
      <Menu.Item key="10">Option 22</Menu.Item>
      <Menu.Item key="11">Option 23</Menu.Item>
      <Menu.Item key="12">Option 24</Menu.Item>
    </SubMenu>
    <SubMenu key="sub7" icon={<SafetyCertificateOutlined />} title="Fleet">
      <Menu.Item key="9">Option 25</Menu.Item>
      <Menu.Item key="10">Option 26</Menu.Item>
      <Menu.Item key="11">Option 27</Menu.Item>
      <Menu.Item key="12">Option 28</Menu.Item>
    </SubMenu>
    <SubMenu key="sub8" icon={<HomeOutlined />} title="Company">
      <Menu.Item key="9">Option 29</Menu.Item>
      <Menu.Item key="10">Option 30</Menu.Item>
      <Menu.Item key="11">Option 31</Menu.Item>
      <Menu.Item key="12">Option 32</Menu.Item>
    </SubMenu>

    <SubMenu key="sub9" icon={<PieChartOutlined />} title="Reports">
      <Menu.Item key="9">Option 33</Menu.Item>
      <Menu.Item key="10">Option 34</Menu.Item>
      <Menu.Item key="11">Option 35</Menu.Item>
      <Menu.Item key="12">Option 36</Menu.Item>
    </SubMenu>

    <SubMenu key="sub10" icon={<SettingOutlined />} title="Settings">
      <Menu.Item key="9">Option 37</Menu.Item>
      <Menu.Item key="10">Option 38</Menu.Item>
      <Menu.Item key="11">Option 39</Menu.Item>
      <Menu.Item key="12">Option 40</Menu.Item>
    </SubMenu>
  </Menu>
      </Sider>
      <Layout style={{ padding: '0 74px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Rate</Breadcrumb.Item>
          <Breadcrumb.Item>RT2553 tarife</Breadcrumb.Item>
        </Breadcrumb>
        <Text><b>#RT2553</b> nolu tarife detayı</Text>

        <div className="site-statistic-demo-card">
        <Text>Tarife Önizleme</Text>
    <Row gutter={25}>
      <Col span={5}>
        <Card>
          <Statistic
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<FileTextOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={5}>
        <Card>
          <Statistic
            title="Idle"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<EnvironmentOutlined />} 
            suffix="%"
          />
        </Card>
      </Col>

      <Col span={5}>
        <Card>
          <Statistic
            title="Idle"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<GlobalOutlined />} 
            suffix="%"
          />
        </Card>
      </Col>


      <Col span={5}>
        <Card>
          <Statistic
            title="Idle"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<GlobalOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
    </Row>
  </div>

  <div className="ort-gunluk-ucret">
  <Row gutter={25}>
  <Col span={5}>
  
        <Card>
          <Statistic
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<FileTextOutlined />}
            suffix="%"
          />
        </Card>
        </Col>
        </Row>

        </div>
      </Layout>
    </Layout>
  </Layout>,
  document.getElementById('container'),
);