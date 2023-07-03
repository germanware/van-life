import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className="navbar-element page-size">
            <Link to={"/"}><h2>#VANLIFE</h2></Link>
            <ul>
                <Link to={"/about"}><li>About</li></Link>
                <Link to={"/vans"}><li>Vans</li></Link>
            </ul>
        </nav>
    )
}

export default Nav;