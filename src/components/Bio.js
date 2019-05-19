import React from 'react'


class Bio extends React.Component {
  render() {
    if(this.props.userBio) {
      return (
        <div>
          <section class="about section">
            <div class="section-inner">
              <h2 class="heading">About Me</h2>
              <div class="content">
                <h4>{ this.props.userBio }</h4>
              </div>
            </div>
          </section>
        </div>
      )
    }
    return (
      <h4> Loading... </h4>

    )
  }
}

export default Bio