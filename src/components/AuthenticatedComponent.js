import React from 'react'
import axios from 'axios' 
import { withRouter } from 'react-router-dom'
import { getJwt } from '../helpers/jwt'

class AuthenticatedComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: undefined
    }
  }

componentDidMount() {
  const jwt = getJwt();
  if (!jwt) {
    this.props.history.push('/Login');
  }

  axios.get('/api/users', { headers: {Authorization: `Bearer ${jwt}`}}).then(res => this.setState({
    user: res.data
  })).catch(err => {
    localStorage.removeItem('cool-jwt');
    this.props.history.push('/Login');
  });
}

render() {
  if (this.state.user === undefined) {
    return (
      <div><h1>Loading...</h1></div>
      );
  }
  return (
    <div>
      {this.props.children}
    </div>
    )
  }
}



export default withRouter(AuthenticatedComponent);