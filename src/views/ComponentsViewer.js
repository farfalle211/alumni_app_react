import React from 'react'
import BlogComponent from '../components/BlogComponent'
import Footer from '../components/Footer'
import Header from '../components/Header'

class ComponentsViewer extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BlogComponent />
        <Footer />
      </div>
    )
  }
}

export default ComponentsViewer