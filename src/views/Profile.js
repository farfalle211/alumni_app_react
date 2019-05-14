import React from 'react'
import User from '../components/User'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import Skills from '../components/Skills'
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
      <div className="container sections-wrapper">
          <div className="row">
              <div className="secondary col-lg-4 col-12">
                <Education 
                  educationInfo={this.state.user.educations}
                />
                <Skills skills={this.state.user.skills} />
              </div>
              
              <div className="primary col-lg-8 col-12">
                  <User 
                    key={this.state.user.id} 
                    userInfo={this.state.user}
                  />
              </div>

          </div>
      </div>
    )
  }
}

export default Profile