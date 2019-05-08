import React from 'react'

function LanguageComponent() {
  return  (
    <aside class="languages aside section">
        <div class="section-inner">
            <h2 class="heading">Languages</h2>
            <div class="content">
                <ul class="list-unstyled">
                    <li class="item">
                        <span class="title"><strong>English:</strong></span>
                        <span class="level">Native Speaker <br class="visible-xs"/><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> </span>
                    </li>
                    <li class="item">
                        <span class="title"><strong>Spanish:</strong></span>
                        <span class="level">Professional Proficiency <br class="visible-sm visible-xs"/><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star-half"></i></span>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
    )
}

export default LanguageComponent