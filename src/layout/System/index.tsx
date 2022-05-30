import './index.less'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
// import { start  } from 'qiankun'
import { Layout, Menu } from 'antd'
import { registerMicroApps, start, initGlobalState, MicroAppStateActions  } from 'qiankun';
const { Header, Content } = Layout

const state = {
  name: 'qiankun-react'
}
// 初始化 state
const actions: MicroAppStateActions = initGlobalState(state);
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev, 9);
});
setTimeout(() => {
  actions.setGlobalState({...state, test: 666666})
}, 2000)
actions.offGlobalStateChange();

// 使用qiankun微框架
registerMicroApps([
  {
    name: 'adminApp', // 应用名字
    // entry: '/admin/', // html 打包注意更改
    entry: '//localhost:3011', // html
    container: '#admin', // 容器名
    activeRule: '/admin', // 激活的路径
  },
  {
    name: 'react-pro', // 应用名字
    // entry: '/react/', // html 打包注意更改
    entry: '//localhost:3012', // html
    container: '#react2', // 容器名
    activeRule: '/react2', // 激活的路径
    props: {
      name: 'test-react2',
      test: 99999999
    }
  },
  {
    name: 'qiankun-vue', // 应用名字
    // entry: '/vue/', // html 打包注意更改
    entry: '//localhost:3013', // html
    container: '#vue3', // 容器名
    activeRule: '/vue3', // 激活的路径
  },
]);

let arr = [
  {key: '/', label: '博客首页', path: '/'},
  {key: '/admin', label: '万云科技管理系统', path: '/admin'},
  {key: '/react2', label: '商家系统', path: '/react2'},
  {key: '/vue3', label: '商家系统vue', path: '/vue3'}
]

const App:React.FC = () => {
  const history = useHistory()
  const [current, setCurrent] = useState<string>('');

  // 组件渲染后再启动微应用
  useEffect(() => {
    start()
  }, [])

  const changeSys = (e:any) => {
    setCurrent(e.key)
    history.push({pathname: e.key})
  }

  return (
    <Layout>
      <Header className="sys-header">
        <Menu
          theme="light"
          mode="horizontal"
          selectedKeys={[current]}
          onClick={changeSys}
          items={arr.map((_) => ({
            key: _.key,
            label: _.label
          }))}
        />
      </Header>
      <Content className="sys-content">
        <div>
          <div id="admin"></div>
          <div id="react2"></div>
          <div id="vue3"></div>
        </div>
      </Content>
    </Layout>
  )
};

export default App;