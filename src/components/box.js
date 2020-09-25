import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { 
  Layout, 
  Menu, 
  Typography, 
  Statistic,
  Card, 
  Row, 
  Col,
} from 'antd';
import {
  FileTextOutlined, 
  EnvironmentOutlined,
   GlobalOutlined,
  
  } from '@ant-design/icons';

const { Text } = Typography;

  class MultiplyBox extends React.Component {

  render () {
    return (

  <Layout>
   
   <div className="site-statistic-demo-card">

<div className="text-title">
<Text>Tarife Önizleme</Text>
</div>
<Row gutter={25}>
<Col span={4}>
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
<Col span={4}>
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

<Col span={4}>
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


<Col span={4}>
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
<Col span={4}>

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
    )
}
}

export default MultiplyBox;