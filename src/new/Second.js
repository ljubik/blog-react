import React, { Component } from 'react'

class Second extends Component {
  render() {
    console.log('otrymaly', this.props.items)
    return (
      <div>
        <b>Novyy komponent</b>
        {this.props.items.map((item, index) => (
          <a href={item.link} key={index}>
            {item.lable}
          </a>
        ))}
      </div>
    )
  }
}
export default Second
