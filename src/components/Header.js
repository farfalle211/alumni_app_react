import React from 'react'

function Header() {
  return (
    <div>
      <header className="header allHeader">
          <div className="container clearfix">         
              <img className="profile-image img-fluid float-right" src="../assets/images/ActualizeNew.png" alt="Actualize Logo" />
              <div className="profile-content float-left">
                  <h2 className="name">Actualize Coding Bootcamp</h2>
                  <h3 className="desc">Alumni Network</h3>   
              </div>    
          </div>
      </header>
    </div>
  )
}

export default Header