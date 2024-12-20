import React from 'react'
import { useParams } from 'react-router-dom'
import Contact from './Contact'

const About = () => {
    
    const param = window.location.pathname
    debugger
    const rander = param == "/contact/about" ? <Contact /> : null
  return (
    <>
    {rander}
    <div>About Us</div>
    </>
  )
}

export default About