import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }


change(e) {
  this.setState({
    [e.target.name]: e.target.value
  });
}


submit(e) {
  e.preventDefault();
  axios.post('/api/sessions', {
                                email: this.state.email,
                                password: this.state.password
                              }).then(res => {
                              localStorage.setItem('cool-jwt', res.data.jwt);
                              localStorage.setItem('user_id', res.data.user_id);
                              this.props.history.push('/Profiles');
                              });
                            
}

render() {
    return (

      <form onSubmit={e => this.submit(e)}>
        <input placeholder="Email" 
               type="text" 
               name="email" 
               onChange={e => this.change(e)} 
               value={this.state.email}/>
        <br />
        <input placeholder="password" 
               type="password" 
               name="password" 
               onChange={e => this.change(e)} 
               value={this.state.password}/>
        <br />
        <button type="submit"> Submit </button>
      </form>

      )
  }
}


export default withRouter(LoginComponent)