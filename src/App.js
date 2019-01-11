import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import HeaderPage from './header/HeaderPage'
import StartPage from './context/StartPage'
// import AdminPage from './admin/AdminPage'
// import AddNews from './admin/AddNews'

class App extends Component {
  someMethod() {
    const test = '2'
  }
  render() {
    return (
      <div>
        <HeaderPage />
        <StartPage />
        {/* <AdminPage />
        <AddNews />  */}
      </div>
    )
  }
}

export default App
