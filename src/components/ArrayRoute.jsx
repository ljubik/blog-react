import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { getItem } from './storageservice'

class ArrayRoute extends Component {
  async componentDidMount() {
    const postList = getItem('postList', [])
    if (postList.length) this.setState({ postList: postList })
  }

  render() {
    console.log('otrymav ArrayRoute', this.state.postList)
    return (
      <div>
        {/* <Link to='/article/${id}'>Read More</Link> */}
        {this.state.postList.map((postList, index) => (
          <Link to="/article/${postList.urlAlias}">{postList.index}</Link>
        ))}
      </div>
    )
  }
}

export default ArrayRoute
