import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#" style={{color: 'black'}}>Dashboard</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to='/' className='nav-link' style={{color: 'black'}}>Home</Link>
          </li>
          <li className="nav-item dash-nav-item">
            <a className="nav-link" href="#" style={{color: 'black'}}>Features</a>
          </li>
          <li className="nav-item dash-nav-item">
            <a className="nav-link" href="#" style={{color: 'black'}}>Pricing</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
