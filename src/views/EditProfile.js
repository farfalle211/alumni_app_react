import React from "react";
import UserForm from "../components/UserForm";
import axios from 'axios';

class EditProfile extends React.Component {
  constructor() {
    super();
    this.state = {
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

  componentDidMount() {
    const { match: { params } } = this.props;

    axios.get(`/api/users/${params.userId}`)
      .then(res => {
        const user = res.data;
        this.setState({ user });
      }) 
  }

  updateProfile = () => {
    
  }

  render () {
    return(
      <div>
        <h1>Edit Form (hooray)</h1>
        <UserForm 
          user={this.state.user}
        />
        {console.log(this.state.user)}
      </div>
    )
  }
}

export default EditProfile