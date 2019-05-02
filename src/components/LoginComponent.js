import React from 'react'
import axios from 'axios'

class LoginComponent extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

handleSubmit = (event) => {
  axios.post(/api/)
}

render() {
    return (

      <form onSubmit={ this.handleSubmit }>
        <input placeholder="Email" type="email" />
        <br />
        <input placeholder="password" type="password" />
        <br />
        <button> Submit </button>
      </form>

      )
  }
}


export default LoginComponent