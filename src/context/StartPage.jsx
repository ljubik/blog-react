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
  Container,
} from 'reactstrap'
import CardSmall from '../user/CardSmall'

class StartPage extends Component {
  render() {
    console.log('otrymaly v StartPage', this.props.items)
    return (
      <div>
        <Container>
          <CardSmall />
        </Container>
      </div>
    )
  }
}
export default StartPage
