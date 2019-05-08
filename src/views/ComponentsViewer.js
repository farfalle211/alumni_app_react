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
        <Footer />
        <Education />
      </div>
    )
  }
}

export default ComponentsViewer