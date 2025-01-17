import React, {useState} from 'react'
import {FiPhone, FiMail} from 'react-icons/fi'
import './index.css'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  const currentYear = new Date().getFullYear()

  return (
    <div className="contact-container" id="contact">
      <div className="contact-content">
        <div className="contact-wrapper">
          <div className="contact-header">
            <h2 className="contact-name">Contact Information</h2>
            <button onClick={toggleVisibility} className="contact-toggle-btn">
              {isVisible ? 'Hide Contact Info' : 'Show Contact Info'}
            </button>
          </div>

          {isVisible && (
            <div className="contact-info">
              <div className="contact-details">
                <div className="contact-item">
                  <FiMail className="contact-icon" size={20} />
                  <a
                    href="mailto:kondamadhu1994@gmail.com"
                    className="contact-link"
                  >
                    rajprithivi099@gmail.com
                  </a>
                </div>

                <div className="contact-item">
                  <FiPhone className="contact-icon" size={20} />
                  <a href="tel:+919791509443" className="contact-link">
                    +91 979 150 9443
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-copyright">
            © {currentYear} All Rights Reserved
          </p>
          <p className="footer-tagline">
            Designed and Developed by Prithivi Raj.k
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Contact
