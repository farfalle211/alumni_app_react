import React from 'react'

function SkillsComponent() {
  return (
    <div class="skills aside section">
      <div class="section-inner">
          <h2 class="heading">Skills</h2>
          <div class="content">
              <p class="intro">
                  Intro about your skills goes here. Keep the list lean and only show your primary skillset. You can always provide a link to your Linkedin or Coderwall profile so people can get more info there.</p>
              
              <div class="skillset">
                 
                  <div class="item">
                      <h3 class="level-title">Python &amp; Django<span class="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to explain more about your skill level..."><i class="fas fa-info-circle"></i>Expert</span></h3>
                      <div class="level-bar">
                          <div class="level-bar-inner" data-level="96%">
                          </div>                                      
                      </div>
                  </div>
                  <div class="item">
                      <h3 class="level-title">Javascript &amp; jQuery<span class="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to explain more about your skill level..."><i class="fas fa-info-circle"></i>Expert</span></h3>
                      <div class="level-bar">
                          <div class="level-bar-inner" data-level="96%">
                          </div>                                      
                      </div>
                  </div>
                  
                  <div class="item">
                      <h3 class="level-title">HTML5, CSS3, SASS &amp; LESS<span class="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to explain more about your skill level..."><i class="fas fa-info-circle"></i>Expert</span></h3>
                      <div class="level-bar">
                          <div class="level-bar-inner" data-level="96%">
                          </div>                                      
                      </div>                           
                  </div>
                  
                  <div class="item">
                      <h3 class="level-title">Ruby on Rails<span class="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to explain more about your skill level..."><i class="fas fa-info-circle"></i>Pro</span></h3>
                      <div class="level-bar">
                          <div class="level-bar-inner" data-level="85%">
                          </div>                                      
                      </div>                           
                  </div>
                  
                  <p><a class="more-link" href="#"><i class="fas fa-external-link-alt"></i>More on Coderwall</a></p> 
              </div>              
          </div>
      </div>
    </div>
    )
}


export default SkillsComponent