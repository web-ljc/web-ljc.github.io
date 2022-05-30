import {Route, Switch, Redirect} from 'react-router-dom'
import Content from './Content'
import System from './System'

// 整体布局
export default () => {
  return (<>
    {/* Content要改 */}
    {/* 注册路由 */}
    <Switch>
      <Route path='/index' component={Content} />
      <Route path={['/admin', '/react2', '/vue3']} component={System} />
      <Redirect to='/index' />
    </Switch>
  </>)
}

/*
  - 整体布局也要更着路由改动
  - Content根据路由进行跳转
*/