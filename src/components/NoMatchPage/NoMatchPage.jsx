import React from 'react'
import { Result, Button } from 'antd';
import { useHistory } from 'react-router-dom'

const NoMatchPage = () => {
  window.scrollTo(0, 0)
  const history = useHistory()
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={() => history.push('/')}>Go to Homepage</Button>}
    />
  )
}
export default NoMatchPage