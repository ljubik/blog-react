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

class Container extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm="4">
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
        </Row>
      </div>
    )
  }
}
export default Container
