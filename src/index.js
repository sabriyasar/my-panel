import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import SidebarMenu from './components/menu';
import RTMenu from './components/rt-menu';
import MultiplyBox from './components/box';
import MultiplyTabs from './components/tabs';
import Charts from './components/chart';
import TwoChart from './components/twochart';

ReactDOM.render(
  
  <Layout>
      
      <SidebarMenu />
      <MultiplyTabs />
      <RTMenu />
      <Charts />
      <TwoChart />
      <MultiplyBox />
        
       
  </Layout>,
  document.getElementById('container'),
);