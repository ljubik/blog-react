import React, { Component } from 'react'
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap'
import HeaderPage from '../header/header-page'
import { Route, Link } from 'react-router-dom'
import { getItem, setItem, clearAll } from '../components/storageservice'

class newPost {
  constructor(props) {
    // this.postList = props.postList || []
    this.title = props.title || 'Some title'
    this.content = props.content || 'Some content'
    this.urlAlias = props.urlAlias || 'Some urlAlias'
    this.imageUrl = props.imageUrl || 'Some imageUrl'
    this.like = props.like || 0
  }
}

function _getProprety(object, key, _default) {
  if (object !== undefined && object[key] !== undefined) {
    return object[key]
  }
  return _default
}

class AddNews extends Component {
  async componentDidMount() {
    //const postList = getItem('postList')
    //console.log('log start type', typeof postList)
    //this.setState({ postList: JSON.parse(postList) })
  }

  constructor(props) {
    super(props)
    this.state = {
      postList: [],
      title: '',
      content: '',
      urlAlias: '',
      imageUrl:
        'https://cdn-images-1.medium.com/max/1600/1*DnYaPy28FmfMQSe4KWvyJw.jpeg',
      like: Number,
      id: Number,
    }
    this.input = React.createRef()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleContentChange = this.handleContentChange.bind(this)
    this.handleUrlAliasChange = this.handleUrlAliasChange.bind(this)
  }
  handleTitleChange(event) {
    this.setState({ title: event.target.value })
  }

  handleContentChange(event) {
    this.setState({ content: event.target.value })
  }

  handleUrlAliasChange(event) {
    this.setState({ urlAlias: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const {
      title,
      content,
      urlAlias,
      imageUrl,
      like,
      id,
      postList,
    } = this.state
    const post = new newPost({
      title: title,
      content: content,
      urlAlias: urlAlias,
      imageUrl:
        'https://cdn-images-1.medium.com/max/1600/1*DnYaPy28FmfMQSe4KWvyJw.jpeg',
      like: 0,
      id: id,
    })
    postList.push(post)

    this.setState({
      title: postList.title,
      content: postList.content,
      urlAlias: postList.urlAlias,
      imageUrl:
        'https://cdn-images-1.medium.com/max/1600/1*DnYaPy28FmfMQSe4KWvyJw.jpeg',
      like: 0,
      id: id,
    })
    console.log('log this.state', typeof this.state)
    console.log('log this.state.postList', typeof this.state.postList)
    console.log('log postList', typeof postList)

    _getProprety(postList)
    console.log('log from _getProprety', typeof postList)
    setItem('postList', JSON.stringify([postList]))
  }

  render() {
    return (
      <div>
        <HeaderPage />

        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="title" sm={2}>
              Title
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="title"
                id="title"
                ref={this.input.title}
                onChange={this.handleTitleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="content" sm={2}>
              Text Area
            </Label>
            <Col sm={10}>
              <Input
                type="textarea"
                name="content"
                id="content"
                ref={this.input.content}
                onChange={this.handleContentChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="urlInput" sm={2}>
              urlAlias
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="urlAlias"
                id="urlInput"
                ref={this.input.urlAlias}
                onChange={this.handleUrlAliasChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="ImgFile" sm={2}>
              File
            </Label>
            <Col sm={10}>
              <Input type="file" name="file" id="ImgFile" />
              <FormText color="muted">Select image file.</FormText>
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button color="success" tabIndex="10">
                Save
              </Button>
              <Button outline color="secondary">
                <Link to="/admin/admin-page">Cancel </Link>
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}
export default AddNews
