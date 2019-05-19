import React from 'react'

function Projects(props) {
  if (props.userProjects) {
    const displayProjects = props.userProjects.map(project =>{
        return( 
          <div style={{paddingTop: 10}}>
            <h4><u>{project.title}</u></h4>
            <h6>{project.description}</h6>
            <h6>Tech: {project.technology}</h6>
          </div>
        )
    })
    return (
      <div className="blog aside section">
        <div className="section-inner">
          <h2 className="heading">My Projects</h2>
            {displayProjects}
        </div>
      </div>
      )
  } return (
      <div>
        Loading Projects...
      </div>
    )
}

export default Projects