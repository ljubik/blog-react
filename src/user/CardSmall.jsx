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
import { getItem, setItem, clearAll } from '../components/storageservice'

class CardSmall extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: [],
    }
  }
  async componentDidMount() {
    const postList = getItem('postList', [])
    if (postList.length) this.setState({ postList: postList })
  }
  render() {
    console.log('otrymaly v CardSmall', this.state.postList)
    return (
      <Row>
        {this.state.postList.map((item, index) => (
          <Col xs="4" key={index}>
            <CardImg
              top
              width="30%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
              alt="Card image cap"
            />
            <Card body>
              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.content}</CardText>
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
        ))}
      </Row>
    )
  }
}
export default CardSmall
