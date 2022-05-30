import {useEffect, useState} from 'react'
import { Avatar, Col, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import '@style/components/header.less'

const Author = () => {
  return (
    <div className='author-div comm-box'>
      <Avatar size={64} icon={<UserOutlined />} />
      <div>
        博客搭建中...
      </div>
    </div>
  )
}

export default Author