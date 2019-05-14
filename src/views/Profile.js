import React from 'react'
import User from '../components/User'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import Header from '../components/Header'

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

  render () {
    return (
        <div>
          <Header />
          <h1>Something</h1>
          <User 
            key={this.state.user.id} 
            userInfo={this.state.user}
          />
          <Skills skills={this.state.user.skills} />
        </div>
    )
  }
}

export default Profile