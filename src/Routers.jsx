import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { getItem } from './components/storageservice'

class Routers extends Component {
  async componentDidMount() {
    const postList = getItem('postList', [])
    if (postList.length) this.setState({ postList: postList })
  }

  render() {
    return (
      <div>
        {this.state.postList.map((postList, index) => (
          <BrowserRouter>
            <Route
              key={index}
              path={postList.urlAlias}
              component={postList.urlAlias}
            />
          </BrowserRouter>
        ))}
      </div>
    )
  }
}

export default Routers
