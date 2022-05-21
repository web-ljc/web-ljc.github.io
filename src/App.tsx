import { Row, Col } from 'antd'
import Header from './componments/Header'
import IndexList from './pages/List'
import Detail from './pages/Detail'
import Author from './componments/Author'
import Footer from './componments/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <Row className='comm-main' align='top' justify='center'>
        <Col className='comm-left' xs={24} sm={24} md={13} lg={15} xl={14}>
          {/* <IndexList /> */}
          <Detail />
        </Col>
        <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
        </Col>
      </Row>
      <Footer />
      <div id="react"></div>
    </div>
  );
}

export default App;
