import React, { Component } from 'react'
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardFooter,
  Row,
  Col,
} from 'reactstrap'
import CardSmall from './CardSmall'

class Container extends Component {
  render() {
    return (
      <div>
        <CardSmall />
      </div>
    )
  }
}
export default Container
