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
import { getItem, setItem, clearAll } from '../components/storageservice'
import { Route, Link } from 'react-router-dom'
import ArrayRoute from '../components/ArrayRoute'

class CardSmall extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: [],
      title: '',
      content: '',
      urlAlias: '',
      imageUrl: '',
      like: Number,
      idx: Number,
    }
    this.handleLike = this.handleLike.bind(this)
    this.handleRead = this.handleRead.bind(this)
  }
  async componentDidMount() {
    const postList = getItem('postList', [])
    if (postList.length) this.setState({ postList: postList })
  }

  handleLike = index => () => {
    const like = this.state.postList
    //like[index].like = like + 1
    // this.setState.postList[index].like.push(like)
    console.log('handleLike ', like[index].like)
    // this.setState.postList[index].like
    // this.setState({ count: this.state.count + 1 })
    //this.setState.postList[index]({ like: like + 1 })
  }

  handleRead = index => () => {
    console.log('handleRead', this.state.postList[index])
  }

  render() {
    // console.log('otrymaly v CardSmall', this.state.postList)
    return (
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
                <Button
                  outline
                  color="primary"
                  onClick={this.handleRead(index)}>
                  <Link to={`/article/${postList.urlAlias}`} items={postList}>
                    Read more
                  </Link>
                </Button>
                {/* <ArrayRoute data={postList[index].urlAlias} /> */}
                <Button
                  outline
                  color="secondary"
                  onClick={this.handleLike(index)}>
                  Like <Badge color="secondary">{postList.like}</Badge>
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
