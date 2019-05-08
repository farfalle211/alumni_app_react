import React from 'react'
import Resources from './views/Resources'
import TestimonialsComponents from './components/TestimonialsComponents'


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>

        <TestimonialsComponents />
      </div>
    )
  }
}
export default App