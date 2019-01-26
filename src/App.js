import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import HeaderPage from './header/HeaderPage'
import StartPage from './context/StartPage'

import { getItem, setItem } from './components/storageservice'
// const postList = [
//   {
//     idx: 1,
//     title: 'title1',
//     content: 'text in content firsttttt',
//     urlAlias: 'fotos1.jpg',
//     imageUrl: 'www.image.com',
//     like: 0,
//   },
//   {
//     idx: 2,
//     title: 'title2',
//     content: 'text in content2',
//     urlAlias: 'fotos2.jpg',
//     imageUrl: 'www.image.com',
//     like: 5,
//   },
//   {
//     idx: 3,
//     title: 'title3',
//     content: 'text in content33',
//     urlAlias: 'fotos3.jpg',
//     imageUrl: 'www.image.com',
//     like: 5,
//   },
//   {
//     idx: 4,
//     title: 'title4',
//     content:
//       'text in content fgdfgdgd dfgdgddfgd d  fgdg dfgd g 33343 434345343334 3434343 3 34 34 34 34 ',
//     urlAlias: 'fotos4.jpg',
//     imageUrl: 'www.image.com',
//     like: 7,
//   },
//   {
//     idx: 5,
//     title: 'title5',
//     content: 'text in content33555555',
//     urlAlias: 'fotos5.jpg',
//     imageUrl: 'www.image.com',
//     like: 5,
//   },
// ]

class App extends Component {
  // async componentDidMount() {
  //   const postList = getItem('postList', [])
  //   if (postList.length) this.setState({ postList: postList })
  // }

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
