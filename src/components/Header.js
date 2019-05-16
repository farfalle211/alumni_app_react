import React from 'react'

function Header() {
  return (
    <div>
      <header className="header">
          <div className="container clearfix">                       
              <img className="profile-image img-fluid float-right" src="assets/images/ActualizeNew.png" alt="James Lee" />
              <div className="profile-content float-left">
                  <h1 className="name">Actualize Coding Bootcamp</h1>
                  <h2 className="desc">Alumni Network</h2>   
                  <ul className="social list-inline">
                    <li><a href="#">Profiles</a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>                   
                    <li className="list-inline-item"><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-github-alt"></i></a></li>    
                    <li className="list-inline-item"><a href="#"><i className="fab fa-stack-overflow"></i></a></li>   
                    <li className="list-inline-item last-item"><a href="#"><i className="fab fa-codepen"></i></a></li>          </ul> 
              </div>
              <a className="btn btn-cta-primary float-right" href="https://themes.3rdwavemedia.com/" target="_blank"><i className="fas fa-paper-plane"></i> Contact Me</a>            
          </div>
      </header>
    </div>
  )
}

export default Header