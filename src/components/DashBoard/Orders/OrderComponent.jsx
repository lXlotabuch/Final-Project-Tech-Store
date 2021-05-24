/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  Descriptions, Dropdown, Button, Menu
} from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import {
  ContainerOrder, ShowListStyled, StyledMenu, ImgContainer,
  ImgDash
} from './StyledOrderComponent'
import UpperCaseFirstLetter from '../../../utils/upperCaseFirstLetter';
import cutString from '../../../utils/cutString';
 
const OrderComponent = ({order}) => {
  const menu = (
    <StyledMenu>
      {order.products.map((item) => (
        <Menu.Item key={item._id}>
          <Link to={`products/${item.product.itemNo}`}>
            {`${cutString(UpperCaseFirstLetter(item.product.name), 23)} - ${item.cartQuantity} pc`}
            <ImgContainer>
              <ImgDash src={item.product.imageUrls[0]} />
            </ImgContainer>
          </Link>
        </Menu.Item>
      ))}
    </StyledMenu>
  );
  return (
    <ContainerOrder>
      <Descriptions
        style={{paddingTop: '30px'}}
        bordered
        title={`Order №: ${order.orderNo}`}
        column={{
          xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1
        }}
        size="small"
      >
        <Descriptions.Item label="Order Date:">{order.date.substr(0, 10)}</Descriptions.Item>
        <Descriptions.Item label="Payment type:">{order.paymentInfo}</Descriptions.Item>
        <Descriptions.Item label="Products:" style={{padding: '8px'}}>
          <ShowListStyled>
            <Dropdown overlay={menu} placement="bottomCenter">
              <Button>Show</Button>
            </Dropdown>
          </ShowListStyled>
        </Descriptions.Item>
        <Descriptions.Item label="Shipping:">{`${order.shipping} ₴`}</Descriptions.Item>
        <Descriptions.Item label="Total amount:">{`${order.totalSum} ₴`}</Descriptions.Item>
      </Descriptions>
    </ContainerOrder>
  );
}

OrderComponent.propTypes = {
  order: PropTypes.instanceOf(Object).isRequired
}

export default OrderComponent;
