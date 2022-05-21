import { useState } from 'react'
import { List } from 'antd'
import {FieldTimeOutlined, TagsOutlined, TeamOutlined} from '@ant-design/icons'
import ReactMarkdown from 'react-markdown'

const IndexList = () => {
  let mardown= `A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
  | a | b |
  | - | - |
  `

  return (
    <div>
      <ReactMarkdown
        children={mardown}
      />
    </div>
  )
}

export default IndexList