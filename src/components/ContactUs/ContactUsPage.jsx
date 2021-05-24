/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, message } from 'antd';
import {
  ClockCircleOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons'
import StyledButton from '../common/Buttons/StyledButton'
import {
  StyledWrapper, StyledTitle, StyledText, StyledContact, StyledAddress, StyledTextAddress,
  StyledHeaderAddress, StyledLinkPhoneAddress, StyledLinkMailAddress,
  StyledAddressWrapper, StyledInput, StyledFormItem,
  StyledInputTextArea, StyledIconWrapper, StyledContainer, StyledFormWrapper,
  StyledForm, StyledFormItemTextArea, StyledWrapperContainer
} from './Styled'
import { Container } from '../common/Container'
import { validTelephone, validName } from '../../utils/constants'
import { selectCustomerInfo } from '../../store/customer/reducer'

const mapStateToProps = (state) => ({ customerInfo: selectCustomerInfo(state) })

const ContactUsPage = connect(mapStateToProps, null)(({ customerInfo }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const history = useHistory()

  const fields = [
    {
      name: 'name',
      value: customerInfo.firstName
    },
    {
      name: 'email',
      value: customerInfo.email
    },
    {
      name: 'phone',
      value: customerInfo.telephone || '+380'
    }
  ]

  const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 22 },
  };
  const onFinish = () => {
    history.push('/')
    message.success('Thank you for a feedback, our manager will call you soon.')
  }
  return (
    <Container>
      <StyledWrapperContainer>
        <StyledTitle>Contact Us</StyledTitle>
        <StyledContainer>
          <StyledWrapper>
            <StyledText>We love hearing from you, our Shop customers.</StyledText>
            <StyledText>
              Please contact us and we will make sure to get back to you as soon as we possibly can.
            </StyledText>
          </StyledWrapper>
          <StyledForm onFinish={onFinish} fields={fields} layout="vertical" {...layout}>
            <StyledFormWrapper>
              <StyledFormItem
                name="name"
                label="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your name!',
                  },
                  {
                    pattern: validName,
                    message: 'Allowed characters is a-z, а-я.'
                  },
                  {
                    min: 2,
                    max: 25,
                    message: 'Name must be between 2 and 25 characters.'
                  },
                ]}
              >
                <StyledInput placeholder="Your name" />
              </StyledFormItem>
              <StyledFormItem
                name="email"
                label="email"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid email!',
                  },
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ]}
              >
                <StyledInput placeholder="Your email" />
              </StyledFormItem>
              <StyledFormItem
                name="phone"
                label="Your phone"
                rules={[
                  {
                    required: true,
                    message: 'Please write your phone number.',
                  },
                  {
                    pattern: validTelephone,
                    message: 'Phone number must start with "+380", allowed characters is 0-9.'
                  },
                  {
                    min: 13,
                    max: 13,
                    message: 'Phone number must contain 12 numbers.'
                  }
                ]}
              >
                <StyledInput placeholder="Phone number" />
              </StyledFormItem>
            </StyledFormWrapper>
            <StyledFormItemTextArea
              name="feedback"
              label="What’s on your mind?"
              rules={[
                {
                  required: true,
                  message: 'Please leave us a comment.',
                },
              ]}
            >
              <StyledInputTextArea placeholder="Jot us a note and we’ll get back to you as quickly as possible" />
            </StyledFormItemTextArea>
            <Form.Item>
              <StyledButton type="primary" htmlType="submit" size="sm" shape="round">
                Submit
              </StyledButton>
            </Form.Item>
          </StyledForm>
          <StyledContact>
            <StyledAddress>
              <StyledIconWrapper>
                <EnvironmentOutlined />
              </StyledIconWrapper>
              <StyledAddressWrapper>
                <StyledHeaderAddress>Address:</StyledHeaderAddress>
                <StyledTextAddress>1234 Street Adress City Address, 1234</StyledTextAddress>
              </StyledAddressWrapper>
            </StyledAddress>
            <StyledAddress>
              <StyledIconWrapper>
                <PhoneOutlined />
              </StyledIconWrapper>
              <StyledAddressWrapper>
                <StyledHeaderAddress>Phone:</StyledHeaderAddress>
                <StyledLinkPhoneAddress href="tel: +380504432255">(00)1234 5678</StyledLinkPhoneAddress>
              </StyledAddressWrapper>
            </StyledAddress>
            <StyledAddress>
              <StyledIconWrapper>
                <ClockCircleOutlined />
              </StyledIconWrapper>
              <StyledAddressWrapper>
                <StyledHeaderAddress>We are open:</StyledHeaderAddress>
                <StyledTextAddress>Monday - Thursday: 9:00 AM - 5:30 PM</StyledTextAddress>
                <StyledTextAddress>Friday 9:00 AM - 6:00 PM</StyledTextAddress>
                <StyledTextAddress>Saturday: 11:00 AM - 5:00 PM</StyledTextAddress>
              </StyledAddressWrapper>
            </StyledAddress>
            <StyledAddress>
              <StyledIconWrapper>
                <MailOutlined />
              </StyledIconWrapper>
              <StyledAddressWrapper>
                <StyledHeaderAddress>E-mail:</StyledHeaderAddress>
                <StyledLinkMailAddress href="mailto:fem8mail@gmail.com">fem8mail@gmail.com</StyledLinkMailAddress>
              </StyledAddressWrapper>
            </StyledAddress>
          </StyledContact>
        </StyledContainer>
      </StyledWrapperContainer>
    </Container>
  )
})

export default ContactUsPage