import React from 'react'
import 'antd/dist/antd.css';
import { Form } from 'antd'
import StyledButton from '../../common/Buttons/StyledButton'
import { StyledInput, StyledForm } from './footer-style-components/Styled'
import createNewSubscribe from '../../../store/subscriptions/middleware'
import { letterHtmlSubscribe, letterSubjectSubscribe } from '../../../utils/constants';

const FormSubscribe = () => {
  const [form] = StyledForm.useForm()

  const onFinish = (values) => {
    const credentials = {
      ...values, letterHtml: letterHtmlSubscribe, letterSubject: letterSubjectSubscribe
    }
    createNewSubscribe(credentials)
    form.resetFields()
  }
  return (
    <StyledForm name="nest-messages" onFinish={onFinish} form={form}>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Email is required.'
          },
          {
            type: 'email',
            message: 'Entered data is not an email.'
          },
        ]}
      >
        <StyledInput placeholder="your email" />
      </Form.Item>
      <StyledButton type="primary" htmlType="submit" size="sm" shape="round">
        Subscribe
      </StyledButton>
    </StyledForm>
  )
}

export default FormSubscribe