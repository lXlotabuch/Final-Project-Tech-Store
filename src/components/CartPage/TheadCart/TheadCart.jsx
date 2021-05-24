import { Col, Row } from 'antd';
import React from 'react';
import StyledThead from './StyledTheadCart';

const TheadCart = () => (
  <StyledThead>
    <Row>
      <Col span={5}>Product(s)</Col>
      <Col span={7} />
      <Col span={3} className="price">Price</Col>
      <Col span={5} className="qty">Quantity</Col>
      <Col span={3} className="subtotal">Subtotal</Col>
      <Col span={1} />
    </Row>
  </StyledThead>
);

export default TheadCart;