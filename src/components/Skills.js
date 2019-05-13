import React from 'react'

const Skills = props => {
  
  const userSkills = props.skills.map( skill => {
    return(
      <div className="item">
        <h3 className="level-title"> {skill.name} <span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true"><i className="fas fa-info-circle" /> {/* Your skill level goes here */} </span></h3>
        <div className="level-bar">
          <div className="level-bar-inner" data-level="100%">
          </div>                                      
        </div>
      </div>
    )
  });

  return (
    <div className="skills aside section">
      <div className="section-inner">
        <h2 className="heading">Skills</h2>
        <div className="content">
          {/* <p className="intro"> Intro here if desired </p> */ }
          <div className="skillset">
            
            {userSkills}

            <p><a className="more-link" href="#"><i className="fas fa-external-link-alt" />More on Coderwall</a></p> 
          </div>              
        </div>
      </div>
    </div>
    )
}


export default Skills