import React from 'react'

function User(props) {
  return (
    <div>
      <h1>{props.userInfo.email}</h1>
    </div>
  )
}

export default User