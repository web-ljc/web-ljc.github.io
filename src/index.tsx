import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import './static/style/pages/comm.less'
import { registerMicroApps, start } from 'qiankun';

// 使用qiankun微框架
registerMicroApps([
  {
    name: 'react app', // 应用名字
    // entry: '/react/', // html
    entry: '//localhost:3011', // html
    container: '#react', // 容器名
    activeRule: '/react', // 激活的路径
  },
]);
start();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
