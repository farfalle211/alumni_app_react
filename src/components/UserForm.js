import React from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'

class UserForm extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {
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
      },
      errors: [],
      error: ""
    }
  }
  
  handleChange = (event) => {
    const {name, value} = event.target
    this.setState(
      { 
        user: {
              [name]: value
              }
      }
    )
  }
  
  

  componentDidCatch(error, info) {
    console.log({error})
  }

  componentWillReceiveProps = (newProps) => {
    this.setState({
      user: newProps.user
    }) 
  }

  
  handleSubmit = event => {
    axios.post("/api/users", {
                              first_name: this.state.user.first_name, 
                              last_name: this.state.user.last_name,
                              email: this.state.user.email,
                              password: this.state.user.password,
                              admin: this.state.user.admin,
                              status: this.state.user.status,
                              title: this.state.user.title,
                              bio: this.state.user.bio,
                              linkedin_url: this.state.user.linkedin_url,
                              github_url: this.state.user.github_url,
                              personal_website_url: this.state.user.personal_website_url,
                              picture_url: this.state.user.picture_url,
                              image: this.state.user.image
                              } )
    .then(response => {
      // console.log(response);
      // console.log(response.data);
    }).catch(error => {
        console.log(error.response.data);
        this.setState({
          error: error.response.data
        })
        localStorage.setItem("errors", error);
      });

  }

  render() {
    return (
      <div>

        <h1>Error: {this.state.error}</h1>

        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            name="first_name"
            value={this.state.user.first_name}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          <input 
            type="text"
            name="last_name"
            value={this.state.user.last_name}
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <input 
            type="text"
            name="email"
            value={this.state.user.email}
            placeholder="Email"
            onChange={this.handleChange}
          />
          <br />
          <input 
            type="text"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <br />
          <input 
            type="text"
            name="status"
            value={this.state.user.status}
            placeholder="Status"
            onChange={this.handleChange}
          />
          <br />
          <input 
            type="text"
            name="title"
            value={this.state.user.title}
            placeholder="Title"
            onChange={this.handleChange}
          />
          <br />
          <textarea 
            name="bio"
            value={this.state.user.bio}
            placeholder="Bio"
            onChange={this.handleChange}
          />
          <br />
          <input 
            type="text"
            name="linkedin_url"
            value={this.state.user.linkedin_url}
            placeholder="LinkedIn"
            onChange={this.handleChange}
          />
          <br />
          <input 
            type="text"
            name="github_url"
            value={this.state.user.github_url}
            placeholder="GitHub"
            onChange={this.handleChange}
          />
          <br />
          <input 
            type="text"
            name="personal_website_url"
            value={this.state.user.personal_website_url}
            placeholder="Personal Website"
            onChange={this.handleChange}
          />
          <br />
          <input 
            type="text"
            name="picture_url"
            value={this.state.user.picture_url}
            placeholder="Picture"
            onChange={this.handleChange}
          />
          <br />
          <input 
            type="file"
            name="image"
            value={this.state.user.image}
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