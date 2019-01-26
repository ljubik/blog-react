import React, { Component } from 'react'
import Second from './Second'
const menu = [
  {
    link: '/xren',
    lable: 'text',
  },
  {
    link: '/xren2',
    lable: 'text2',
  },
  {
    link: '/xren1',
    lable: 'tex1t',
  },
]
class First extends Component {
  render() {
    return (
      <div>
        <Second items={menu} />
      </div>
    )
  }
}
export default First
