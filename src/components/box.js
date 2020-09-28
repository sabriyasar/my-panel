import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { 
  Layout, 
  Progress, 
  Typography, 
  Statistic,
  Card, 
  Row, 
  Col,
} from 'antd';
import {
  FileTextOutlined, 
  EnvironmentOutlined,
  CreditCardOutlined,
  
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
    title="Toplam kontrat sayısı"
    value={1.246}
    valueStyle={{ color: '#3f8600' }}
    prefix={<FileTextOutlined />}
    suffix="adet"
  />
</Card>
</Col>
<Col span={4}>
<Card>
  <Statistic
    title="Toplam bölge sayısı"
    value={17}
    valueStyle={{ color: '#cf1322' }}
    prefix={<EnvironmentOutlined />} 
    suffix="bölge"
  />
</Card>
</Col>

<Col span={4}>
<Card>
  <Statistic
  title="İptal oranı"
  value={23} 
  prefix={<Progress type="dashboard" percent={35} width={40} />}
  />
</Card>
</Col>


<Col span={4}>
<Card>
<Statistic 
    title="UpSell Oranı" 
    value={8} 
    prefix={<Progress type="dashboard" percent={12} width={40} />} 
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
    title="Ortalama günlük ücret"
    value={234}
    valueStyle={{ color: '#3f8600' }}
    prefix={<CreditCardOutlined />}
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