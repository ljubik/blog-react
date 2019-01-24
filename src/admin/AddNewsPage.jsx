import React, { Component } from 'react'
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
} from 'reactstrap'
import HeaderPage from '../header/HeaderPage'
import { Route, Link } from 'react-router-dom'
import { getItem, setItem, clearAll } from '../components/storageservice'
import AddNews from './AddNews'
import CardPreview from './CardPreview'

class AddNewsPage extends Component {
  render() {
    return (
      <div>
        <HeaderPage />
        <AddNews />
      </div>
    )
  }
}
export default AddNewsPage
