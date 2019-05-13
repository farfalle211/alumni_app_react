import React from 'react'

function ProjectComponent() {
  return (
    <div class="blog aside section">
      <div class="section-inner">
          <h2 class="heading">Latest Blog Posts</h2>
          <p>You can use Sascha Depold's <a href="https://github.com/sdepold/jquery-rss" target="_blank">jQuery RSS plugin</a> to pull in your blog post feeds.</p>
          <div id="rss-feeds" class="content">
          </div>
      </div>
    </div>
    )
}

export default ProjectComponent