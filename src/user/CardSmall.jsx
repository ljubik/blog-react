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

class CardSmall extends Component {
  render() {
    return (
      <Col xs="4">
        <CardImg
          top
          width="30%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
        />
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <CardFooter className="text-muted left">
            <Button outline color="primary">
              Read more
            </Button>
            <Button outline color="secondary">
              Like
            </Button>
          </CardFooter>
        </Card>
      </Col>
    )
  }
}
export default CardSmall
