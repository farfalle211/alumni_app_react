import React from 'react'
import Resources from './views/Resources'
import Header from './components/Header'
import Footer from './components/Footer'


class App extends React.Component {
  render() {
    return (
        <div>
          <Header />
          <h1>Home</h1>
          <Footer />
        </div>
    )
  }
}
export default App