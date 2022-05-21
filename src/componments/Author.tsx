import {useEffect, useState} from 'react'
import { Avatar, Col, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import '@style/components/header.less'

const Author = () => {
  return (
    <div className='author-div comm-box'>
      <Avatar size={64} icon={<UserOutlined />} />
    </div>
  )
}

export default Author