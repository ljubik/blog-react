import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'
import { Route, Link } from 'react-router-dom'
import { getItem, setItem, clearAll } from '../components/storageservice'
import { formatWithOptions } from 'util'

class TablePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: [
        {
          idx: 0,
          title: 'title1',
          content: 'text in content',
          urlAlias: 'fotos1.jpg',
          like: 0,
        },
        {
          idx: 1,
          title: 'title2',
          content: 'text in content2',
          urlAlias: 'fotos2.jpg',
          like: 5,
        },
        {
          idx: 2,
          title: 'title3',
          content: 'text in content33',
          urlAlias: 'fotos3.jpg',
          like: 5,
        },
        {
          idx: 3,
          title: 'title3',
          content: 'text in content33',
          urlAlias: 'fotos3.jpg',
          like: 7,
        },
        {
          idx: 4,
          title: 'title3',
          content: 'text in content33',
          urlAlias: 'fotos3.jpg',
          like: 5,
        },
      ],
    }
  }

  async componentDidMount() {
    const postList = getItem('postList', [])
    if (postList.length) this.setState({ postList: postList })
  }

  render() {
    return (
      <div>
        <Table hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>News Title</th>
              <th>Like</th>
              <th>Author</th>
              <th>Function</th>
            </tr>
          </thead>
          <tbody>
            {this.state.postList.map(idx => (
              <tr>
                <th scope="row" key={idx}>
                  {idx.idx}
                </th>
                {/* <td {this.state.postList[i].title} /> */}
                <td>{idx.title}</td>
                <td>{idx.content}</td>
                <td>{idx.urlAlias}</td>
                <td>
                  <Button outline color="secondary">
                    Edit
                  </Button>
                  <Button outline color="danger">
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
