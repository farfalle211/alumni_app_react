import React from 'react'
import Resource from '../components/Resource'
import axios from 'axios'
import ResourceCard from '../components/ResourceCard'

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
    const resourceComponents = this.state.resources.map(pen => <Resource key={pen.id} resource={pen} />)
    return (
      <div>
        <h1>Hello</h1>
        {resourceComponents}
      </div>
    )
  }
}
export default Resources