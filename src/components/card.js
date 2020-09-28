import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Card, Col, Row } from 'antd';

class MultiplyCard extends React.Component {

    render () {
      return (
  <div className="site-card-wrapper">
      
      <Col span={22}>
    <Row gutter={0}>
        
      <Col span={3}>
        <Card bordered={false} >
         <p><h5>Tarife kodu </h5></p>
          <p><h4>RTC93272</h4> </p>
        </Card>
      </Col>
      
      <Col span={3}>
        <Card bordered={false}>
          <p><h5>Tarife adı</h5> </p>
          <p><h4>C Segment</h4> </p>
        </Card>
      </Col>
      <Col span={3}>
        <Card bordered={false}>
          <p><h5>Tarife tipi</h5> </p>
          <p><h4>Tek yön</h4> </p>
        </Card>
      </Col>
      <Col span={3}>
        <Card bordered={false}>
          <p><h5>Ek süre</h5> </p>
          <p><h4>3 Saat</h4> </p>
        </Card>
      </Col>
      <Col span={3}>
        <Card bordered={false}>
          <p><h5>Min. kullanım</h5> </p>
          <p><h4>1 Gün </h4></p>
        </Card>
      </Col>
      <Col span={3}>
        <Card bordered={false}>
          <p><h5>Maks. kullanım</h5></p>
          <p><h4>45 Gün</h4> </p>
        </Card>
      </Col>
    </Row>
    </Col>
  </div>
    )
}
}

export default MultiplyCard;