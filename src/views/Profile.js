import React from 'react'
import User from '../components/User'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import Education from '../components/Education'

class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props;

    axios.get(`/api/users/${params.userId}`)
      .then(res => {
        const user = res.data;
        this.setState({ user });
      }) 
  }

  render() {
    return (
        <div>
          <h1>Something</h1>
          <Education 
            educationInfo={this.state.user.education}
          />
          <User 
            key={this.state.user.id} 
            userInfo={this.state.user}
          />
        </div>
    )
  }
}

export default Profile