import React from 'react'
import './App.css'
const Header = () => {
    return (
        <nav>
            <div className='heading'>
                <h3>My Landing page</h3>
            </div>
            <div className='nav-link'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Header