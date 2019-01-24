import React, { Component } from 'react'
import { Table, Button, Container } from 'reactstrap'
import HeaderPage from '../header/HeaderPage'
import { Route, Link } from 'react-router-dom'
import { getItem, setItem, clearAll } from '../components/storageservice'
import TablePage from './TablePage'

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
          <TablePage />
        </Container>
      </div>
    )
  }
}
export default AdminPage
