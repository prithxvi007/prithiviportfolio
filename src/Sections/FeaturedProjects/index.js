import React, {useState} from 'react'
import {FaExternalLinkAlt} from 'react-icons/fa'
import {projects, svgList} from '../../UseFiles'

import './index.css'

const ProjectCard = ({
  imageUrl,
  name,
  description,
  projectLink,
  technologies,
}) => (
  <article className="project-card">
    <div className="image-container">
      <img src={imageUrl} alt={name} loading="lazy" className="project-image" />
    </div>
    <div className="content">
      <div className="link-head">
        <h3>{name}</h3>
        <div>
          <a href={projectLink} title="project link">
            <FaExternalLinkAlt color="black" />
          </a>
        </div>
      </div>
      <p>{description}</p>
    </div>
    <div className="svg-flex">
      {technologies.split(', ').map(item => (
        <span key={item} className="svgs">
          {svgList[item.toLowerCase()]}
        </span>
      ))}
    </div>
  </article>
)

const FeaturedProjects = () => {
  const [visibleCount, setVisibleCount] = useState(4)

  const handleReadMore = () => {
    setVisibleCount(prevCount => prevCount + 4)
  }

  const projectToShow = projects.slice(0, visibleCount)

  return (
    <section className="featured-projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projectToShow.map(project => (
          <ProjectCard key={project.id} {...project} svgList={svgList} />
        ))}
      </div>
      {visibleCount < projects.length && (
        <button className="show-more-button" onClick={handleReadMore}>
          show More
        </button>
      )}
    </section>
  )
}

export default FeaturedProjects
