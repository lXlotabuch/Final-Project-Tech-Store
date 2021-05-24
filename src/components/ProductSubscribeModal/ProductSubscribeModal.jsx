import React from 'react';
import { connect } from 'react-redux';
import {
  Modal,
  Form,
  Input,
  message
} from 'antd';
import { hideSubscribeModal } from '../../store/subscriceOnProductModal/middleware'
import { selectIsOpenModal } from '../../store/subscriceOnProductModal/reducer'
import { selectCustomerInfo } from '../../store/customer/reducer'

const mapStateToProps = (state) => ({
  isOpen: selectIsOpenModal(state),
  customerInfo: selectCustomerInfo(state)
})

const ProductSubscribeModal = connect(mapStateToProps, { hideSubscribeModal })((
  {
    isOpen,
    hideSubscribeModal,
    customerInfo,
  }
) => {
  const [form] = Form.useForm()

  const onSubmit = () => {
    form.resetFields()
    hideSubscribeModal()
    message.success('Thank you, you will be notified when this item is in stock!')
  };
  const onCancel = () => {
    form.resetFields()
    hideSubscribeModal()
  }
  const fields = [
    {
      name: 'email',
      value: customerInfo.email
    }
  ]

  return (
    <Modal
      title="Notify on product availability"
      visible={isOpen}
      okText="Subscribe"
      onCancel={onCancel}
      okButtonProps={{htmlType: 'submit', form: 'subscribeOnProductsForm', shape: 'round'}}
      cancelButtonProps={{shape: 'round'}}
      destroyOnClose
    >
      <Form name="subscribeOnProductsForm" onFinish={onSubmit} form={form} fields={fields}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email.',
            },
            {
              type: 'email',
              message: 'Entered data is not an email.',
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
      </Form>
    </Modal>
  );
})
export default ProductSubscribeModal