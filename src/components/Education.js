import React from "react"

class Education extends React.Component {
  render() {
    if(this.props.educationInfo) {
      
      const educations = this.props.educationInfo.map(education => {
        return(
          <div className="item"> 
            <h3 className="title"><i className="fas fa-graduation-cap" /> {education.school} </h3>
            <h4 className="university"> something <span className="year"> nothing 2</span></h4>
          </div> 
        )} 
      )
      return(
        <aside className="education aside section">
          <div className="section-inner">
          <h2 className="heading">Education</h2>
            <div className="content">
              {educations}
            </div> 
          </div> 
       </aside>
      )
    } 
    return(
      <h4> Loading... </h4>
    )
  }
}


export default Education
