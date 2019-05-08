import React from 'react'
import BlogComponent from '../components/BlogComponent'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Education from '../components/Education'

class ComponentsViewer extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BlogComponent />
        <Education 
          school={"The Ohio State University"}
          degree={"B.S. Computer Science & Engineering"}
          dates={"2010-2012"}
        />
        <Footer />
      </div>
    )
  }
}

export default ComponentsViewer