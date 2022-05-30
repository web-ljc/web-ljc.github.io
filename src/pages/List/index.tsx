import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { List, Space, Card } from 'antd'
import {FieldTimeOutlined, TagsOutlined, TeamOutlined} from '@ant-design/icons'
import './index.less'

interface IArticle {
  id: number,
  title: string
  content: string
  type?: string
  time?: string
}
const Data:IArticle[] = [
  { id: 5, title: '手撕Promise.md', content: '', type: 'Promise', time: '2020-05-28' },
  { id: 4, title: '微前端技术.md', content: '', type: 'qiankun', time: '2020-05-21' },
  { id: 0, title: 'Node文章.md', content: '', type: 'Node', time: '2020-04-21' },
  { id: 1, title: 'React文章.md', content: '', type: 'React', time: '2020-04-11' },
  { id: 2, title: 'React文章2.md', content: '', type: 'React', time: '2020-04-01' },
  { id: 3, title: 'Vue文章.md', content: '', type: 'Vue', time: '2020-03-21' }
]

const IndexList:React.FC = () => {
  const [articleList,  setArticleList] = useState<IArticle[]>([])
  const history = useHistory()
  const arr:any = []

  // 获取数据
  const getData = (item:IArticle, index: number) => {
    return new Promise((resolve, reject) => {
      const getMd = new Request(require(`../../static/file/${item.title}`), {method: 'GET'})
      fetch(getMd).then(resp => resp.text()).then(text => {
        item.content = text
        resolve(item)
      })
    })
  }
  const getFn = () => {
    Data.forEach((item, index) => {
      arr[index] = getData(item, index)
    })
    Promise.all(arr).then(v => {
      setArticleList(v)
    })
  }

  useEffect(() => {
    getFn()
  }, [])

  // 跳转详情页
  const toDetail = (obj: IArticle) => {
    history.push({pathname: '/index/detail', state: {...obj}})
  }

  return (
    <>
      <List
        header={<div>最新日志</div>}
        itemLayout='vertical'
        dataSource={articleList}
        renderItem={item => (
          <List.Item onClick={e => toDetail(item)}>
            <Card hoverable bordered={false}>
              <div className='list-title'>{item.title}</div>
              <div className="list-icon">
                <Space size={10}>
                  <span><FieldTimeOutlined />{item.time}</span>
                  <span><TagsOutlined />{item.type}</span>
                </Space>
              </div>
              <div className='content'>
                {item.content.slice(0, 100)+'...'}
              </div>
            </Card>
          </List.Item>
        )}
        />
    </>
  )
}

export default IndexList