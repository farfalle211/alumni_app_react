import React from 'react'
import { Route, Link } from 'react-router-dom'

const Profile = ({ match }) => <p>{match.params.id}</p>

class Profiles extends React.Component {
  render() {
    const { url } = this.props.match
    return (
      <div>
        <h1>Profiles</h1>
        <strong>select a Profile</strong>
        <ul>
          <li>
            <Link to="/profiles/1">Profile 1 </Link>
          </li>
          <li>
            <Link to="/profiles/2">Profile 2 </Link>
          </li>
          <li>
            <Link to="/profiles/3">Profile 3 </Link>
          </li>
        </ul>
        <Route path="/profiles/:id" component={Profile} />
      </div>
    )
  }
}

export default Profiles