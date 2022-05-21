import {useEffect, useState} from 'react'
import { Row, Col, Button } from 'antd'
import { BookOutlined, FileOutlined } from '@ant-design/icons'
import '@style/components/header.less'

const Header = () => {
  return (
    <div className='header'>
      <Row align='top' justify='center'>
        <Col xs={24} sm={24} md={10} lg={10} xl={12}>
          <span className='header-log'>
            Web-Ljc
          </span>
          <span className='header-text'>
            个人博客
          </span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Button className='header-btn' size={'large'} ghost>子应用一</Button>
          <Button className='header-btn' size={'large'} ghost>子应用二</Button>
        </Col>
      </Row>
    </div>
  )
}

export default Header