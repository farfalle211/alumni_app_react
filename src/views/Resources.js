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
    // this.resources = this.resources.bind(this)
    // axios.get("/api/resources")
    //   .then(res => {
    //     const resources = res.data;
    //     console.log(res.data)
    //     this.setState({ resources });
    //   })
  }

  componentDidMount() {
    axios.get("/api/resources")
      .then(res => {
        const resources = res.data;
        console.log(res.data)
        this.setState({ resources });
      }) 
  }

  render() {
    const resourceComponents = this.resources.map(pen => <Resource key={pen.id} resource={pen} />)
    return (
      <div>
        <h1>Hello</h1>
        <ResourceCard />
        <Resource />
      </div>
    )
  }
}
export default Resources