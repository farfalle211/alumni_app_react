import React from 'react'
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg';
import Vuejs from '../Vuejs.png'

// import { Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button } from 'reactstrap';

class ResourceCard extends React.Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ Vuejs } />
        <Card.Body>
          <Card.Title>Vue.js Resources</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      )
  }
}
export default ResourceCard