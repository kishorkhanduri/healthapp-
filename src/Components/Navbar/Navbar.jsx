import React from 'react'
import '../Navbar/Navbar.css'
import Navlogo from '../Navbar/logo.jpg'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-left">
        <img src={Navlogo} alt="mb" />
        <h4>H-care</h4>
        </div>

        <div className="nav-mid">
        <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder='Search...' />
        </div>

        <div className="nav-right">
        <i class="fa-solid fa-bell"></i>
        <i class="fa-solid fa-user"></i>
            <h4>Emma Kwan</h4>
        </div>

    </div>
  )
}