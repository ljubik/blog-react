import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import HeaderPage from './header/header-page'
import StartPage from './context/start-page'
import Container from './user/container'
import { getItem, setItem } from './components/storageservice'
class App extends Component {
  async componentDidMount() {
    const postList = getItem('postList')
  }

  someMethod() {
    const test = '2'
  }

  render() {
    return (
      <div>
        <HeaderPage />
        <Container />
        <StartPage />
      </div>
    )
  }
}

export default App
