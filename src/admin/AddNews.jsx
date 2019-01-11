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
import HeaderPage from '../header/HeaderPage'
import { Route, Link } from 'react-router-dom'

class AddNews extends Component {
  render() {
    return (
      <div>
        <HeaderPage />
        <Button outline color="secondary">
          <Link to="/admin/AdminPage">Back </Link>
        </Button>
        <Form>
          <FormGroup row>
            <Label for="TitleInput" sm={2}>
              Title
            </Label>
            <Col sm={10}>
              <Input type="text" name="TitleTxt" id="TitleInput" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="TextInput" sm={2}>
              Text Area
            </Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="TextInput" />
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
              <Button color="success">Save</Button>
              <Button outline color="secondary">
                Cancel
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}
export default AddNews
