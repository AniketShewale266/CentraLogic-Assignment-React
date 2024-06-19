import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
        <div className='navbar'>
            <nav>
                <Link to='/' >Home</Link>
                <Link to='/even'>Even</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </div>
    </>
  )
}

export default NavBar