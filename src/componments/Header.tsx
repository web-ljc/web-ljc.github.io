import { Row, Col, Button } from 'antd'
import {Link} from 'react-router-dom'
import '@style/components/header.less'

const Header:React.FC = () => {
  // 下载简历
  let _href = require(`../static/file/李佳臣_前端开发简历.pdf`)

  return (
    <div className='header'>
      <Row align='top' justify='center'>
        <Col xs={24} sm={24} md={10} lg={10} xl={14}>
          <span className='header-log'>
            Web-Ljc
          </span>
          <span className='header-text'>
            个人博客
          </span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={10} xl={6}>
          <Button className='header-btn' size={'large'} ghost>
            <Link to='/admin'>微应用</Link>
          </Button>
          <Button className='header-btn' size={'large'} ghost>
            <a href={_href} download>个人简历</a>
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default Header