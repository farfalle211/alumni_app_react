import React from 'react'
import axios from 'axios'

class AddProject extends React.Component {
  constructor() {
    super()
    this.state = {
      title: "",
      description: "",
      technology: "",
      type: "",
      user_id: ""
     
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = () => {
    const { user, rememberMe } = this.state;
    localStorage.setItem('rememberMe', rememberMe);
    localStorage.setItem('user', rememberMe ? user : '');
  };

  handleSubmit = event => {
    axios.post("/api/projects", {
                              title: this.state.title, 
                              description: this.state.description,
                              technology: this.state.technology,
                              type: this.state.type,
                              user_id: this.state.user_id
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
            name="title"
            value={this.state.title}
            placeholder="Title"
            onChange={this.handleChange}
          />
          <br />
          <textarea 
            name="description"
            value={this.state.description}
            placeholder="Description"
            onChange={this.handleChange}
          />
          <br />
          <textarea 
            name="type"
            value={this.state.type}
            placeholder="Type"
            onChange={this.handleChange}
          />
          <br />
          <label>Type: </label>
          <select
              value={this.state.type}
              onChange={this.handleChange}
              name="type"
          >
              <option value="capstone">Capstone</option>
              <option value="graduate_initiative">Graduate Initiative</option>
              <option value="personal">Personal</option>
              <option value="in_class">In Class</option>
          </select>
          <br />
          <input
            type="text"
            name="user_id"
            value={this.state.user_id}
            placeholder="User"
            onChange={this.handleChange}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    ) 
  }
}

export default AddProject