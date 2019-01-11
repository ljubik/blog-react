import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import HeaderPage from './header/HeaderPage'

class App extends Component {
  someMethod() {
    const test = '2'
  }
  render() {
    return (
      <div className="App">
        <HeaderPage />
        <header className="App-header">
          <p>
            Edit <code> src / App.js </code> and save to reload.{' '}
          </p>{' '}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React{' '}
          </a>{' '}
        </header>{' '}
      </div>
    )
  }
}

export default App
