import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg';
import Vuejs from '../Vuejs.png'

function Resource(props) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ Vuejs } />
        <Card.Body>
          <Card.Title>{props.resource.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button href="https://docs.google.com/document/d/1bytW4c9X8GIwH-zlI_zMu3TgDIsk6hLTE3LJI5hD5Kg/edit" variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>

  )
}

export default Resource