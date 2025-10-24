import React from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import About from './About'
import Services from './Services'
const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <div className='services'>
        <Services 
        title="Web Design"
        detail="Beautiful, user-friendly designs that captivate your audience."
        />
        <Services 
        title="Development"
        detail="Clean and scalable code for all types of web applications."
        />
        <Services 
        title="SEO Optimization"
        detail="Boost your search rankings and attract more visitors."
        />
      </div>
    </div>
  )
}

export default App