import React, {useState} from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'

import {
  FaHome,
  FaUser,
  FaCode,
  FaEnvelope,
  FaTimes,
  FaDownload,
  FaRegSun,
  FaRegMoon,
} from 'react-icons/fa'

import {useTheme} from '../../context'
import './index.css'

function Header() {
  const {theme, toggleTheme} = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo-container">
          <img
            className="icon"
            src="https://img.freepik.com/premium-photo/me-mini-avatar-dmkz_960020-1384.jpg"
            alt="Developer Logo"
          />

          <h1 className="logo">Portfolio</h1>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <RxHamburgerMenu />}
        </button>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="link">
            <FaHome />
            <p className="p-link">Home</p>
          </a>
          <a href="#skills" className="link">
            <FaCode />
            <p className="p-link">Skills</p>
          </a>
          <a href="#about" className="link">
            <FaUser />
            <p className="p-link">About</p>
          </a>
          <a
            href="https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/ccbp_prod/media/resume_generated/Prithivi_2025-01-16-235433.pdf"
            className="link"
          >
            <FaDownload />
            <p className="p-link">Resume</p>
          </a>
          <a href="#contact" className="link">
            <FaEnvelope />
            <p className="p-link">Contact</p>
          </a>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? <FaRegSun /> : <FaRegMoon />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
