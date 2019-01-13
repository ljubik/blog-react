import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import HeaderPage from './header/header-page'
import StartPage from './context/start-page'
// import AdminPage from './admin/admin-page'
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
