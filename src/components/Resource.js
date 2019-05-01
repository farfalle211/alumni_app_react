import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg';
import Vuejs from '../Vuejs.png'
import Col from 'react-bootstrap/Col'

function Resource(props) {
  return (
    <div>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ Vuejs } />
          <Card.Body>
            <Card.Title>{ props.resource.title }</Card.Title>
            <Card.Text>{ props.resource.description }
            </Card.Text>
            <Button href={ props.resource.url } variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </div>

  )
}

export default Resource