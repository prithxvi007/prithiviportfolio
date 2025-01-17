import React from 'react'

import {FaGithub, FaLinkedin} from 'react-icons/fa'
import './index.css'

function SocialSidebar() {
  return (
    <div className="social-sidebar">
      <a
        href="https://github.com/prithxvi007/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="git" />
      </a>
      <a
        href="https://www.linkedin.com/in/prithiviraj007/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="linked" />
      </a>
    </div>
  )
}

export default SocialSidebar
