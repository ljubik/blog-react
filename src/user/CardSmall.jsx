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
  constructor(props) {
    super(props)
    this.state = {
      postList: [
        {
          idx: 0,
          title: 'title1',
          content: 'text in content',
          urlAlias: 'fotos1.jpg',
          like: 0,
        },
        {
          idx: 1,
          title: 'title2',
          content: 'text in content2',
          urlAlias: 'fotos2.jpg',
          like: 5,
        },
        {
          idx: 2,
          title: 'title3',
          content:
            'texthttps://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180 in content33',
          urlAlias: 'fotos3.jpg',
          like: 5,
        },
        {
          idx: 3,
          title: 'title3',
          content:
            'text in contenzdfgzdfgsdgsdfhsghshdfhdfhdjdjdhgjgfhjfghjfghjfghjfghjfgjfgjghjght33',
          urlAlias: 'fotos3.jpg',
          like: 7,
        },
        {
          idx: 4,
          title: 'title3',
          content: 'text in content33',
          urlAlias: 'fotos3.jpg',
          like: 5,
        },
      ],
    }
  }
  render() {
    return (
      <Row>
        {this.state.postList.map(idx => (
          <Col xs="4" key={idx}>
            <CardImg
              top
              width="30%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
              alt="Card image cap"
            />
            <Card body>
              <CardTitle>{idx.title}</CardTitle>
              <CardText>{idx.content}</CardText>
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
