import React from 'react'
import { Link, useParams } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
    <div className="nav-wrapper">
      <Link className="brand-logo" to={`/`}>Logo</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li className='nav-link'><Link to={`/`}>Home</Link></li>
        <li className='nav-link'><Link to={`/contact`}>Contact</Link></li>
        <li className='nav-link'><Link to={`/about`}>About</Link></li>
      </ul>
    </div>
    </nav>
  )
}
