import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'
import HeaderPage from '../header/header-page'
import { Route, Link } from 'react-router-dom'
import { getItem, setItem, clearAll } from '../components/storageservice'

class AdminPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: [],
    }
  }

  async componentDidMount() {
    const postList = getItem('postList', []);

    // console.log('log start type', typeof postList)
    //
    if(postList.length)
      this.setState({ postList: postList })
  }

  render() {
    return (
      <div>
        <HeaderPage />
        <Button outline color="success" onClick={this.handleNewBtn}>
          <Link to="/admin/add-news">Greate New News </Link>
        </Button>
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
            {/* {postList.map((i, postList) => (
              <tr>
                <th scope="row" key={i} />
                <td {...title} />
                <td {...content}>1</td>
                <td {...urlAlias}>Admin</td>
                <td>
                  <Button outline color="secondary">
                    Edit
                  </Button>
                  <Button outline color="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            ))} */}

            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>22</td>
              <td>Admin</td>
              <td>
                <Button outline color="secondary">
                  Edit
                </Button>
                <Button outline color="danger">
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>4</td>
              <td>Admin</td>
              <td>
                <Button outline color="secondary">
                  Edit
                </Button>
                <Button outline color="danger">
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}
export default AdminPage
