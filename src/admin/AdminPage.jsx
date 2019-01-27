import React, { Component } from 'react'
import { Table, Button, Container } from 'reactstrap'
import HeaderPage from '../header/HeaderPage'
import { Route, Link } from 'react-router-dom'
import { getItem, setItem, clearAll } from '../components/storageservice'
import TablePage from './TablePage'
const postListF = [
  {
    idx: 1,
    title: 'title1',
    content: 'text in content firsttttt',
    urlAlias: 'fotos1.jpg',
    imageUrl: 'www.image.com',
    like: 0,
  },
  {
    idx: 2,
    title: 'title2',
    content: 'text in content2',
    urlAlias: 'fotos2.jpg',
    imageUrl: 'www.image.com',
    like: 5,
  },
  {
    idx: 3,
    title: 'title3',
    content: 'text in content33',
    urlAlias: 'fotos3.jpg',
    imageUrl: 'www.image.com',
    like: 5,
  },
  {
    idx: 4,
    title: 'title4',
    content:
      'text in content fgdfgdgd dfgdgddfgd d  fgdg dfgd g 33343 434345343334 3434343 3 34 34 34 34 ',
    urlAlias: 'fotos4.jpg',
    imageUrl: 'www.image.com',
    like: 7,
  },
  {
    idx: 5,
    title: 'title5',
    content: 'text in content33555555',
    urlAlias: 'fotos5.jpg',
    imageUrl: 'www.image.com',
    like: 5,
  },
]
class AdminPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: [],
      title: '',
      content: '',
      urlAlias: '',
      imageUrl: '',
      like: Number,
      idx: Number,
    }
    this.handleNewBtn = this.handleNewBtn.bind(this)
  }

  async componentDidMount() {
    const postList = getItem('postList', [])
    if (postList.length) this.setState({ postList: postList })
  }
  handleNewBtn() {}
  render() {
    console.log('otrymaly v AdminPage', this.state.postList)
    return (
      <div>
        <HeaderPage />
        <Container>
          <Button outline color="success" onClick={this.handleNewBtn}>
            <Link to="/admin/AddNewsPage">Greate New News </Link>
          </Button>
          {/* <TablePage items={postListF} /> */}
          <TablePage />
        </Container>
      </div>
    )
  }
}
export default AdminPage
