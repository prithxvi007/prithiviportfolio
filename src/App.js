import React from 'react'
import Header from './Layout/Header'
import SocialSidebar from './Layout/SocialSidebar'
import Hero from './Sections/Hero'
import Skills from './Sections/Skills'
import About from './Sections/About'
import Contact from './Sections/Contact'
import FeaturedProjects from './Sections/FeaturedProjects'
import {ThemeProvider} from './context'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="portfolio">
        <Header />
        <SocialSidebar />
        <main>
          <Hero />
          <Skills />
          <FeaturedProjects />
          <About />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
