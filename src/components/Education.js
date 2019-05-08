import React from "react"

const Education = (props) => {
  return(
    <aside class="education aside section">
      <div class="section-inner">
        <h2 class="heading">Education</h2>
        <div class="content">
          <div class="item">                      
            <h3 class="title"><i class="fas fa-graduation-cap"></i> { props.degree } </h3>
            <h4 class="university"> {props.school} <span class="year"> ({props.dates})  </span></h4>
          </div> 
        </div> 
      </div> 
    </aside>
  )
}

export default Education
