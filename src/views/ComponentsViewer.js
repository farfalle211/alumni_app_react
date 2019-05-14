import React from 'react'
import BlogComponent from '../components/BlogComponent'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

class ComponentsViewer extends React.Component {
  render() {
    const projects = [
      {
        title: "Tacoholic",
        description: "App that helps you locate tacos",
        technology: "Rails, Vue.js, Bootstrap 4 and Google APIs"
      },
      {
        title: "Sleep Coach",
        description: "It helps you sleep.",
        technology: "Rails, Vue.js, Bootstrap 4"
      }
        
    ]
    return (
      <div>
        
        <Education 
          school={"The Ohio State University"}
          degree={"B.S. Computer Science & Engineering"}
          dates={"2010-2012"}
        />
        <Projects UserProjects={projects} />
      </div>
    )
  }
}

export default ComponentsViewer
