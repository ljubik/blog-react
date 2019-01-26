import React, { Component } from 'react'
import { Table, Button, Container } from 'reactstrap'
import HeaderPage from '../header/HeaderPage'
import { Route, Link } from 'react-router-dom'
import { getItem, setItem, clearAll } from '../components/storageservice'
import TablePage from './TablePage'
const postList = [
  {
    idx: 1,
    title: 'title1',
    content: 'text in content firsttttt',
    urlAlias: 'fotos1.jpg',
    like: 0,
  },
  {
    idx: 2,
    title: 'title2',
    content: 'text in content2',
    urlAlias: 'fotos2.jpg',
    like: 5,
  },
  {
    idx: 3,
    title: 'title3',
    content: 'text in content33',
    urlAlias: 'fotos3.jpg',
    like: 5,
  },
  {
    idx: 4,
    title: 'title4',
    content:
      'text in content fgdfgdgd dfgdgddfgd d  fgdg dfgd g 33343 434345343334 3434343 3 34 34 34 34 ',
    urlAlias: 'fotos4.jpg',
    like: 7,
  },
  {
    idx: 5,
    title: 'title5',
    content: 'text in content33555555',
    urlAlias: 'fotos5.jpg',
    like: 5,
  },
]
class AdminPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: [],
    }
  }

  async componentDidMount() {
    const postList = getItem('postList', [])
    if (postList.length) this.setState({ postList: postList })
  }

  render() {
    return (
      <div>
        <HeaderPage />
        <Container>
          <Button outline color="success" onClick={this.handleNewBtn}>
            <Link to="/admin/AddNewsPage">Greate New News </Link>
          </Button>
          <TablePage items={postList} />
        </Container>
      </div>
    )
  }
}
export default AdminPage
