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
      email: "",
      admin: "",
      status: "",
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

  handleSubmit = event => {
    axios.post("/api/users", {
                              first_name: this.state.first_name, 
                              last_name: this.state.last_name,
                              email: this.state.email,
                              password: this.state.password,
                              admin: this.state.admin,
                              status: this.state.status,
                              title: this.state.title,
                              bio: this.state.bio,
                              linkedin_url: this.state.linkedin_url,
                              github_url: this.state.github_url,
                              personal_website_url: this.state.personal_website_url,
                              picture_url: this.state.picture_url,
                              image: this.state.image
                              } )
    .then(res => {
      console.log(res);
      console.log(res.data);
    })

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
            name="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleChange}
          />
          <br />
          <input 
            type="text"
            name="password"
            value={this.state.password}
            placeholder="Password"
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
          <label>Status: </label>
          <select
              value={this.state.status}
              onChange={this.handleChange}
              name="status"
          >
              <option value="current_student">Current Student</option>
              <option value="alumni">Alumni</option>
              <option value="staff">Staff</option>
              <option value="professional">Professional</option>
          </select>
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
          <input 
            type="file"
            name="image"
            value={this.state.image}
            placeholder="Image"
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