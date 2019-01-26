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
import { AddNews } from './AddNews'
import { getItem, setItem, clearAll } from '../components/storageservice'

class CardPreview extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: this.props.title,
      username: 'Title test',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  // async componentDidMount() {
  //   const postList = getItem('postList', [])
  //   if (postList.length) this.setState({ postList: postList })
  // }

  handleChange(e) {
    this.setState({
      username: e.target.value,
    })
  }

  render() {
    return (
      <Col xs="6">
        <CardImg
          top
          width="30%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
        />
        <Card body>
          TEST make preview:
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <CardTitle name="title" value={this.state.title}>
            {this.state.title}
            {this.state.username}
          </CardTitle>
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
export default CardPreview
