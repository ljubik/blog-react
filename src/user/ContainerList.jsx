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
import { getItem, setItem, clearAll } from '../components/storageservice'
import HeaderPage from '../header/HeaderPage'

class ContainerList extends Component {
  async componentDidMount() {
    // const postList = getItem('postList', [])
    // if (postList.length) this.setState({ postList: postList })
    // const IdList = this.props.postList
    // IdList: this.state.postList.filter(
    //   (urlAlias, index) => urlAlias === urlAlias
    // )
    //const IdList = this.state.postList
    //console.log('did mount array ?', items)
  }

  render() {
    console.log('otrymaly v ContainerList', this.props)
    console.log('otrymaly v ContainerList', this.state)

    return (
      <div>
        <HeaderPage />
        <div>component to wiew </div>
        {/* <label value="items" /> */}
        {/* {this.state.postList.filter((urlAlias, index) => urlAlias === urlAlias)} */}
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
export default ContainerList
