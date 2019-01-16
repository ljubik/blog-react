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
import { getItem, setItem } from '../components/storageservice'

class newPost {
  constructor(props) {
    this.title = props.title || 'Some title'
    this.content = props.content || 'Some content'
    this.urlAlias = props.urlAlias || 'Some urlAlias'
    this.imageUrl = props.imageUrl || 'Some imageUrl'
    this.like = props.like || 0
  }
}

class AddNews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: [],
      title: '',
      content: '',
      urlAlias: '',
      imageUrl: '',
      like: Number,
    }
    this.input = React.createRef()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
  }
  handleTitleChange(event) {
    this.setState({ TitleInput: event.target.value })
  }

  handleSubmit(event) {
    // const { onSubmit, title, content, urlAlias, imageUrl, like } = this.props
    // if (typeof onSubmit === 'function') {
    //   onSubmit({
    //     title: this.state.title.value,
    //     content: this.state.content,
    //     urlAlias: this.state.urlAlias,
    //     imageUrl:
    //       'https://cdn-images-1.medium.com/max/1600/1*DnYaPy28FmfMQSe4KWvyJw.jpeg',
    //     like: 0,
    //   })
    // }

    event.preventDefault()
    const { title, content, urlAlias, imageUrl, like, postList } = this.state
    const post = new newPost({
      title: title,
      content: content,
      urlAlias: urlAlias,
      imageUrl:
        'https://cdn-images-1.medium.com/max/1600/1*DnYaPy28FmfMQSe4KWvyJw.jpeg',
      like: 0,
    })
    postList.push(post)
    //this.input.title.current.value = ''
    this.setState({
      title: this.title,
      content: this.content,
      urlAlias: this.urlAlias,
      imageUrl:
        'https://cdn-images-1.medium.com/max/1600/1*DnYaPy28FmfMQSe4KWvyJw.jpeg',
      like: 0,
    })
    console.log('log from send', this.state)
    setItem('postList', JSON.stringify(postList))
  }

  // handleChange(event) {
  //   this.setState({
  //     title: event.target.value,
  //   })
  // }

  render() {
    return (
      <div>
        <HeaderPage />

        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="TitleInput" sm={2}>
              Title
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="title"
                id="TitleInput"
                ref={this.input.title}
                onChange={this.handleTitleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="TextInput" sm={2}>
              Text Area
            </Label>
            <Col sm={10}>
              <Input
                type="textarea"
                name="content"
                id="TextInput"
                ref={this.input.content}
                onChange={this.handleTextChange}
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
