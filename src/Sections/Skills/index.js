import React from 'react'
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3,
  FaNode,
  FaBootstrap,
  FaDatabase,
  FaPython,
  FaNpm,
  FaGithub,
  FaGitAlt,
  FaFigma,
} from 'react-icons/fa'
import {SiExpress, SiSqlite} from 'react-icons/si'

import './index.css'

function Skills() {
  const FrontEnd = [
    {name: 'HTML5', icon: <FaHtml5 />},
    {name: 'CSS3', icon: <FaCss3 />},
    {name: 'Bootstrap', icon: <FaBootstrap />},
    {name: 'JavaScript', icon: <FaJs />},
    {name: 'React', icon: <FaReact />},
  ]

  const BackEnd = [
    {name: 'Node.js', icon: <FaNode />},
    {name: 'Express.js', icon: <SiExpress />},
    {name: 'SQLite', icon: <SiSqlite />},
    {name: 'REST API', icon: <FaDatabase />},
  ]

  const Programming = [
    {name: 'JavaScript', icon: <FaJs />},
    {name: 'Python', icon: <FaPython />},
  ]

  const Tech = [
    {name: 'NPM', icon: <FaNpm />},
    {name: 'Git', icon: <FaGitAlt />},
    {name: 'GitHub', icon: <FaGithub />},

    {name: 'Figma', icon: <FaFigma />},
  ]

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skill-container">
        <div className="card">
          <h1 className="text-center">Front-End</h1>
          <div className="skills-grid">
            {FrontEnd.map(skill => (
              <div className="skill-item">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <h1 className="text-center">Back-End</h1>
          <div className="skills-grid">
            {BackEnd.map(skill => (
              <div className="skill-item">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <h1 className="text-center">Programming</h1>
          <div className="skills-grid">
            {Programming.map(skill => (
              <div className="skill-item">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <h1 className="text-center">Tech &Tools</h1>
          <div className="skills-grid">
            {Tech.map(skill => (
              <div className="skill-item">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
