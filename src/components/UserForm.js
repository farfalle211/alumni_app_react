import React from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'

class UserForm extends React.Component {
  constructor() {
    super()
    this.state = {
      user: [],
      first_name: "",
      last_name: "",
      personal_website_url: "",
      email: "",
      admin: "",
      status: "",
      location_id: "",
      title: "",
      bio: "",
      linkedin_url: "",
      github_url: "",
      personal_website_url: "",
      picture_url: ""
    }
  }
  
  // componentDidMount() {
  //   const { match: { params } } = this.props;

  //   axios.get(`/api/users/${params.userId}`)
  //     .then(res => {
  //       const userInfo = res.data;
  //       this.setState({ user.push(user) })
  //     })
  // }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
  
  render() {
    return (
      <div>
        <h1>{console.log(this.user)}</h1>
        <form>
          <input 
            type="text"
            name="first_name"
            value={this.state.first_name}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          <input 
            type="text"
            name="last_name"
            value={this.state.last_name}
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <input 
            type="text"
            name="personal_website_url"
            value={this.state.personal_website_url}
            placeholder="Personal Website"
            onChange={this.handleChange}
          />
          <br />
          <input 
            type="text"
            name="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleChange}
          />
          <br />
          <input 
            type="text"
            name="admin"
            value={this.state.admin}
            placeholder="Admin"
            onChange={this.handleChange}
          />
          <br />
          <input 
            type="text"
            name="status"
            value={this.state.status}
            placeholder="Status"
            onChange={this.handleChange}
          />
          <br />
          <input 
            value={this.state.location_id}
            name="location_id"
            placeholder="Location ID"
            onChange={this.handleChange}
          />
          <br />
          <input 
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Title"
            onChange={this.handleChange}
          />
          <br />
          <textarea 
            name="bio"
            value={this.state.bio}
            placeholder="Bio"
            onChange={this.handleChange}
          />
          <br />
          <input 
            type="text"
            name="linkedin_url"
            value={this.state.linkedin_url}
            placeholder="LinkedIn"
            onChange={this.handleChange}
          />
          <br />
          <input 
            type="text"
            name="github_url"
            value={this.state.github_url}
            placeholder="GitHub"
            onChange={this.handleChange}
          />
          <br />
          <input 
            type="text"
            name="personal_website_url"
            value={this.state.personal_website_url}
            placeholder="Personal Website"
            onChange={this.handleChange}
          />
          <br />
          <input 
            type="text"
            name="picture_url"
            value={this.state.picture_url}
            placeholder="Picture"
            onChange={this.handleChange}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    ) 
  }
}

export default UserForm