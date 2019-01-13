import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import HeaderPage from './header/header-page'
import StartPage from './context/start-page'
import AdminPage from './admin/admin-page'
import AddNews from './admin/add-news'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/header/HeaderPage" component={HeaderPage} />
      <Route path="/context/StartPage" component={StartPage} />
      <Route path="/admin/admin-page" component={AdminPage} />
      <Route path="/admin/AddNews" component={AddNews} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
