/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useMemo, useRef, useState
} from 'react';
import PropTypes from 'prop-types';
import {
  Form, Input, Radio, Select
} from 'antd';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom/';
import {
  selectBranches,
  selectCities,
  selectCustomer,
  selectProducts,
  selectShippingCost
} from '../../../store/cart/reducer';
import {StyledRadio, StyledShippingTitle} from '../StyledCheckout';
import StyledButton from '../../common/Buttons/StyledButton';
import { getBranches, getShippingCost, placeOrder} from '../../../store/cart/middleware';
import { validName, validTelephone } from '../../../utils/constants';
import { layoutFormCheckout } from './utils';
    
export const FormCheckoutComponent = (props) => {
  const {
    cities,
    branches,
    customer,
    getBranches,
    shippingCost,
    placeOrder,
    products,
    getShippingCost
  } = props

  const { Option } = Select;
  const history = useHistory()
    
  const formLayout = layoutFormCheckout;
          
  const fields = useMemo(() => ([{
    name: 'email',
    value: customer.email || null
  },
  {
    name: 'firstName',
    value: customer.firstName || null
  },
  {
    name: 'lastName',
    value: customer.lastName || null
  },
  {
    name: 'phoneNumber',
    value: customer.telephone || '+380'
  },
  {
    name: 'country',
    value: 'Ukraine'
  },
  ]), [customer])
  
  const recipientCityRef = useRef();
  const countryRef = useRef();
  const branchSelect = useRef();
  const [valuePaymentInfo] = useState(
    'Payment at the time of receipt of the goods'
  );
  
  const [form] = Form.useForm();
    
  const handleCityChange = (cityRef) => {
    form.setFieldsValue({recipientBranch: null})
    getBranches(cityRef);
  }
  
  const onFinish = (values) => {
    placeOrder(products, values, customer, shippingCost, valuePaymentInfo)
    history.push('/order')
  };
      
  return (
    <Form
      {...formLayout}
      name="checkout-form"
      fields={fields}
      form={form}
      onFinish={onFinish}
    >
      <StyledShippingTitle>
        Customer Details:
      </StyledShippingTitle>
  
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your active email.',
          },
          {
            type: 'email',
            message: 'Entered data is not an email.',
          },
        ]}
      >
        <Input
          placeholder="test@testmail.com"
        />
      </Form.Item>
        
      <Form.Item
        label="First name"
        name="firstName"
        rules={[
          {
            required: true,
            message: 'Please input your name.',
          },
          {
            type: 'string',
            min: 2,
            max: 25,
            message: 'FirstName must be between 2 and 25 letters',
          },
          {
            pattern: validName,
            message: 'First name cannot contain characters, space or numbers'
          },
        ]}
      >
        <Input placeholder="First name" />
      </Form.Item>
  
      <Form.Item
        label="Last name"
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please input your Last name.',
          },
          {
            type: 'string',
            min: 2,
            max: 25,
            message: 'LastName must be between 2 and 25 letters',
          },
          {
            pattern: validName,
            message: 'Last name cannot contain characters, space or numbers'
          },
        ]}
      >
        <Input placeholder="Last name" />
      </Form.Item>
  
      <Form.Item
        label="Phone number"
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: 'Please input your phone number +380 XX XXX XXXX',
            min: 13,
            max: 13,
          },
          {
            pattern: validTelephone,
            message: 'Phone number must start with "+380", allowed characters is 0-9'
          }
        ]}
      >
        <Input placeholder="Mobile Number +380 XX XXX XXXX" />
      </Form.Item>
  
      <StyledShippingTitle>
        Payment Details:
      </StyledShippingTitle>
  
      <Radio.Group
        name="paymentInfo"
        value={valuePaymentInfo}
        style={{marginBottom: '20px'}}
      >
        <StyledRadio value="Payment at the time of receipt of the goods">
          Payment at the time of receipt of the goods
        </StyledRadio>
      </Radio.Group>
        
      <StyledShippingTitle>
        Shipping Details:
      </StyledShippingTitle>
  
      <Form.Item
        label="Country"
        name="country"
        rules={[{ required: true, message: 'Country is required' }]}
      >
        <Input disabled ref={countryRef} />
      </Form.Item>
  
      <Form.Item
        label="City"
        name="recipientCity"
        title="City choice"
        rules={[
          { required: true, message: 'Recipient city is required' },
            
        ]}
      >
        <Select
          placeholder="Select the city of recipient"
          onChange={handleCityChange}
          ref={recipientCityRef}
        >
          {cities.map((item) => (
            <Option value={item.Ref} key={item.Ref}>
              {item.CityName}
            </Option>
          ))}
        </Select>
      </Form.Item>
  
      <Form.Item
        label="№ branch"
        name="recipientBranch"
        rules={[
          { required: true, message: 'Branch is required' },
        ]}
      >
        <Select
          placeholder="Select the branch of Nova Poshta of the recipient"
          onChange={() => getShippingCost(recipientCityRef)}
          ref={branchSelect}
        >
          {branches.map((item) => (
            <Option value={item.branchName} key={item.branchRef}>
              {item.branchName}
            </Option>
          ))}
        </Select>
      </Form.Item>
        
      <StyledButton shape="round" htmlType="submit">
        Place Order
      </StyledButton>
    </Form>
  )
}

const mapStateToProps = (state) => ({
  cities: selectCities(state),
  branches: selectBranches(state),
  customer: selectCustomer(state),
  shippingCost: selectShippingCost(state),
  products: selectProducts(state),
})

const FormCheckout = connect(
  mapStateToProps,
  {
    getBranches,
    getShippingCost,
    placeOrder
  }
)(FormCheckoutComponent)

FormCheckoutComponent.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      CityName: PropTypes.string.isRequired,
      Ref: PropTypes.string.isRequired,
    })
  ).isRequired,
  branches: PropTypes.arrayOf(PropTypes.shape({
    branchName: PropTypes.string.isRequired,
    branchRef: PropTypes.string.isRequired,
  })).isRequired,
  shippingCost: PropTypes.number.isRequired,
  getBranches: PropTypes.func.isRequired,
  getShippingCost: PropTypes.func.isRequired,
  placeOrder: PropTypes.func.isRequired,
  customer: PropTypes.shape({
    telephone: PropTypes.string,
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    imageUrls: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    currentPrice: PropTypes.number,
    _id: PropTypes.string,
  })).isRequired,
}

export default FormCheckout;
