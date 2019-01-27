import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import HeaderPage from './header/HeaderPage'
import StartPage from './context/StartPage'
import { getItem, setItem } from './components/storageservice'

class App extends Component {
  async componentDidMount() {
    const postList = getItem('postList', [])
    if (postList.length) this.setState({ postList: postList })
  }

  render() {
    return (
      <div>
        <HeaderPage />
        <StartPage />
      </div>
    )
  }
}

export default App
