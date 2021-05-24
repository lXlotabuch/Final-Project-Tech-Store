/* eslint-disable prefer-promise-reject-errors */
export const formLayout = {
  labelCol: {
    span: 10,
    offset: 0
  },
  wrapperCol: {
    span: 14,
  },
}

export const passwordMatchValidator = ({ getFieldValue }) => {
  const isPasswordsMatch = (_, value) => {
    if (getFieldValue('password') !== value) {
      return Promise.reject('Passwords is not match.')
    }
    return Promise.resolve()
  }
  return {
    validator: isPasswordsMatch
  }
}

export const getCredentials = (values) => {
  const credentials = Object.entries(values).reduce((acc, [key, value]) => {
    if (key !== 'confrimPassword' && value !== undefined) {
      acc[key] = value
      return acc
    }
    return acc
  }, {})
  credentials.ratedProducts = []
  credentials.isAdmin = true

  return credentials
}