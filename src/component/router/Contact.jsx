import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const Contact = () => {
    const {Name} = useParams();
    console.log(Name);
  return (
    <div>
        <h1>Contact page</h1>
        {/* <Outlet /> */}
        <Link to="/contact/about">About us</Link>
        
        
    </div>
  )
}

export default Contact