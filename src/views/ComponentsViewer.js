import React from 'react'
import BlogComponent from '../components/BlogComponent'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Education from '../components/Education'
import Skills from '../components/Skills'

class ComponentsViewer extends React.Component {
  render() {
    const userSkills = [
      {
        name: "Python",
        id: 1
      },
      {
        name: "Rails",
        id: 2
      },
      {
        name: "Javascript",
        id: 3
      }
    ]
    return (
      <div>
        <Header />
        <BlogComponent />
        <Education 
          school={"The Ohio State University"}
          degree={"B.S. Computer Science & Engineering"}
          dates={"2010-2012"}
        />
        <Skills skills={userSkills} />
        <Footer />
      </div>
    )
  }
}

export default ComponentsViewer