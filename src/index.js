import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import SidebarMenu from './components/menu';
import RTMenu from './components/rt-menu';
import MultiplyBox from './components/box';
import MultiplyTabs from './components/tabs';
import Charts from './components/chart';
import TwoChart from './components/twochart';
import MultiplyCard from './components/card';

ReactDOM.render(
  
  <Layout>
      
      <SidebarMenu />
      <MultiplyTabs />
      <RTMenu />
      <Charts />
      <TwoChart />
      <MultiplyCard />
      <MultiplyBox />
        
       
  </Layout>,
  document.getElementById('container'),
);