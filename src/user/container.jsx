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
} from 'reactstrap'
import CardSmall from './CardSmall'
import { Route, Link } from 'react-router-dom'
import { getItem, setItem, clearAll } from '../components/storageservice'

class Container extends Component {
  async componentDidMount() {
    const postList = getItem('postList', [])
    if (postList.length) this.setState({ postList: postList })
  }

  render() {
    // console.log('otrymaly v Container', this.state.postList)
    return (
      <div>
        component to wiew
        {/* {this.state.postList.map((postList, index) => (
          <Col xs="10" key={index}>
            <Card body>
              <CardTitle>{postList.title}</CardTitle>
              <CardText>{postList.content}</CardText>
            </Card>
          </Col>
        ))} */}
      </div>
    )
  }
}
export default Container
