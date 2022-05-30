import { Row, Col } from 'antd'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from '../componments/Header'
import Footer from '../componments/Footer'
import IndexList from '../pages/List'
import Author from '../componments/Author'
import Detail from '../pages/Detail'

// 整体布局
export default () => {
  return (<>
    <Header />
    <Row className='comm-main' align='top' justify='center'>
      <Col className='comm-left' xs={24} sm={24} md={13} lg={15} xl={15}>
        <Switch>
          <Route path='/index/list' component={IndexList} />
          <Route path='/index/detail' component={Detail} />
          <Redirect to="/index/list" />
        </Switch>
      </Col>
      <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={5}>
        <Author />
      </Col>
    </Row>
    <Footer />
  </>)
}