import React from 'react'

function Projects(props) {
  const displayProjects = props.UserProjects.map(project =>{ 
       return( 
           <div className="section-inner">
              <h2 className="heading">{project.title}</h2>
              <p>{project.description}</p>
              <p>{project.technology}</p>
           </div>
         )
  })
  return (
    <div className="blog aside section">
    {displayProjects}
    </div>
    )
}


export default Projects