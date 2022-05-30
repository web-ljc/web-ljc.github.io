import { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { Button, Tag, Divider } from 'antd'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {darcula, vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism'

interface IArticle {
  id: number,
  title: string
  content: string
  type?: string
  time?: string
}

const IndexList:React.FC = () => {
  const loaction:any = useLocation()
  const history = useHistory()
  const [info, setInfo] = useState<IArticle>()
  
  useEffect(() => {
    console.info(loaction, 'props')
    setInfo(loaction.state)
  }, [])

  return (
    <div>
      <Button type='link' onClick={() => history.goBack()}> {'<< 返回'} </Button>
      <Divider plain></Divider>
      <div style={{textAlign: 'center'}}>
        <h1>{info?.title}</h1>
        <Tag color='blue'>{info?.type}</Tag>
      </div>
      <ReactMarkdown
        children={info?.content as string}
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={vscDarkPlus}
                showLineNumbers={true}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      />
    </div>
  )
}

export default IndexList