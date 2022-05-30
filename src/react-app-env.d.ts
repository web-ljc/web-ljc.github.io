/// <reference types="react-scripts" />

// 在ts环境声名
declare module '*.module.less' {
  const classes: {readonly [key: string] : string}
  export default classes
}

declare module '*.pdf' {
  const classes: {readonly [key: string]: string}
  export default classes
}
declare module '*.md' {
  const classes: {readonly [key: string]: string}
  export default classes
}

declare module 'react-syntax-highlighter'
declare module 'react-syntax-highlighter/dist/esm/styles/prism' 