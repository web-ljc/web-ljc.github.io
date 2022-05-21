/// <reference types="react-scripts" />

// 在ts环境声名
declare module '*.module.less' {
  const classes: {readonly [key: string] : string}
  export default classes
}