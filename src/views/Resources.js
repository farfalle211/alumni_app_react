import React from 'react'
import Resource from '../components/Resource'
import axios from 'axios'
import ResourceCard from '../components/ResourceCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Resources extends React.Component {
  constructor() {
    super()
    this.state = {
      resources: []
    }
  }

  componentDidMount() {
    axios.get("/api/resources")
      .then(res => {
        const resources = res.data;
        this.setState({ resources });
      }) 
  }

  render() {
    const resourceComponents = this.state.resources.map(resource => <Resource key={resource.id} resource={resource} />)

    return (
      <div>
        <Container>
          <Row>
            {resourceComponents} 
          </Row>
        </Container>
      </div>
    )
  }
}

export default Resources