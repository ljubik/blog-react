import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import AdminPage from './admin/AdminPage'
import AddNews from './admin/AddNews'
import AddNewsPage from './admin/AddNewsPage'
import Container from './user/Container'
import First from './new/First'
import ArrayRoute from './components/ArrayRoute'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/admin/AdminPage" component={AdminPage} />
      <Route path="/admin/AddNewsPage" component={AddNewsPage} />
      <Route path="/admin/AddNews" component={AddNews} />
      <Route path="/user/" component={Container} />
      <Route path="/new/First" component={First} />
      <Route path="/components/ArrayRoute" component={ArrayRoute} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
