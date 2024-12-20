import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Home page</h1>
        <Link to="/contact/:Name=rohan">Contact</Link>
    </div>
  )
}

export default Home