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
    //alert(this.state.postList[index].title)
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
                  <Link to={`/user/${postList.urlAlias}`}>
                    {postList.urlAlias}
                  </Link>
                </td>
                <td>
                  <Button
                    outline
                    color="secondary"
                    onClick={this.handleEdit(index)}>
                    <Link to={`/admin/edit/${postList.urlAlias}`}>Edit</Link>
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
