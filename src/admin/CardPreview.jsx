import React, { Component } from 'react'
import {
  Card,
  Button,
  Badge,
  CardImg,
  CardTitle,
  CardText,
  CardFooter,
  Row,
  Col,
  Container,
} from 'reactstrap'
import { AddNews } from './AddNews'
import { Route, Link } from 'react-router-dom'
import { getItem, setItem, clearAll } from '../components/storageservice'

class CardPreview extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: 'Title test',
      postList: [],
      title: '',
      content: '',
      urlAlias: '',
      imageUrl: '',
      like: Number,
      idx: Number,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  async componentDidMount() {
    const postList = getItem('postList', [])
    if (postList.length) this.setState({ postList: postList })
  }

  handleChange(e) {
    this.setState({
      username: e.target.value,
    })
  }

  render() {
    return (
      <Col xs="6">
        <Row>
          {this.state.postList.map((postList, index) => (
            <Col xs="4" key={index}>
              <CardImg
                top
                width="30%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
              <Card body>
                <CardTitle>{postList.title}</CardTitle>
                <CardText>{postList.content}</CardText>
                <CardFooter className="text-muted left">
                  <Button outline color="primary">
                    <Link to={`/user/${postList.urlAlias}`} items={postList}>
                      Read more
                    </Link>
                  </Button>
                  {/* <ArrayRoute data={postList[index].urlAlias} /> */}
                  <Button outline color="secondary">
                    Like <Badge color="secondary">{postList.like}</Badge>
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    )
  }
}
export default CardPreview
