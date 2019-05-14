import React from 'react'
import UserForm from '../components/UserForm'
import AddProject from '../components/AddProject'

function NewProfile() {
  return(
    <div>
      <h1>New User Page</h1>
      <UserForm />
      <br />
      <AddProject />
    </div>
  )  
}

export default NewProfile