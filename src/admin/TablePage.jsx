import React, { Component } from 'react'
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap'
import { Route, Link } from 'react-router-dom'
import { getItem, setItem, clearAll } from '../components/storageservice'

class TablePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      title: '',
      content: '',
      urlAlias: '',
      imageUrl: '',
      like: Number,
      idx: Number,
      postList: [],
      // postList: [
      //   {
      //     idx: 1,
      //     title: 'title1',
      //     content: 'text in content firsttttt',
      //     urlAlias: 'fotos1.jpg',
      //     like: 0,
      //   },
      //   {
      //     idx: 2,
      //     title: 'title2',
      //     content: 'text in content2',
      //     urlAlias: 'fotos2.jpg',
      //     like: 5,
      //   },
      //   {
      //     idx: 3,
      //     title: 'title3',
      //     content: 'text in content33',
      //     urlAlias: 'fotos3.jpg',
      //     like: 5,
      //   },
      //   {
      //     idx: 4,
      //     title: 'title4',
      //     content:
      //       'text in content fgdfgdgd dfgdgddfgd d  fgdg dfgd g 33343 434345343334 3434343 3 34 34 34 34 ',
      //     urlAlias: 'fotos4.jpg',
      //     like: 7,
      //   },
      //   {
      //     idx: 5,
      //     title: 'title5',
      //     content: 'text in content33555555',
      //     urlAlias: 'fotos5.jpg',
      //     like: 5,
      //   },
      // ],
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  async componentDidMount() {
    const postList = getItem('postList', [])
    if (postList.length) this.setState({ postList: postList })
  }

  handleEdit = index => () => {
    console.log('handleEdit', this.state.postList[index])
    alert(this.state.postList[index].title)
  }

  handleDelete = (index, idx) => () => {
    console.log('handleDelete start', this.state.postList)
    const newList = this.state.postList
    newList[index].splice(index, 1)
    // this.setState.postList = newList
    console.log('handleDelete newList', newList[index])
    console.log('handleDelete after', this.state.postList)
  }

  render() {
    console.log('otrymaly v TablePage', this.state.postList)
    return (
      <div>
        <Table hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>News Title</th>
              <th>Content</th>
              <th>Url page </th>
              <th>Function</th>
            </tr>
          </thead>
          <tbody>
            {this.state.postList.map((postList, index) => (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{postList.title}</td>
                <td>{postList.content}</td>
                <td>
                  <Link to={postList.urlAlias}>{postList.urlAlias}</Link>
                </td>
                <td>
                  <Button
                    outline
                    color="secondary"
                    onClick={this.handleEdit(index)}>
                    Edit
                  </Button>
                  <Button
                    outline
                    color="danger"
                    onClick={this.handleDelete(index)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}
export default TablePage
