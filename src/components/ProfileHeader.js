import React from 'react'

const ProfileHeader = (props) => {
  return (
    <div>
      <header className="header">
        <div className="container clearfix">                    
          <img className="profile-image profile-picture img-fluid float-left" src={props.user.picture_url || '../assets/images/DefaultAvatar.png'} alt="Profile Picture" />
          <div className="profile-content float-left">
            <h1 className="name"> { props.user.first_name } { props.user.last_name } </h1>
            <h2 className="desc"> { props.user.title } </h2>   
            <ul className="social list-inline">
              <li className="list-inline-item"><a href={props.user.linkedin_url}><i className="fab fa-linkedin-in" /></a></li>
              <li className="list-inline-item"><a href={props.user.github_url}><i className="fab fa-github-alt" /></a></li>    
              <li className="list-inline-item"><a href={props.user.personal_website_url}><i className="fas fa-user" /></a></li>          
            </ul> 
          </div>
            <a className="btn btn-cta-primary float-right" href={"mailto:" + props.user.email} target="_blank"><i className="fas fa-paper-plane" /> Contact Me</a>              
        </div>
      </header>
    </div>
  )
}
export default ProfileHeader