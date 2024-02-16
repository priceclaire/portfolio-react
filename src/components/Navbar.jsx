import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/Projects">projects</Link>
                </li>
                <li>
                    <Link to="/About">about</Link>
                </li>
                <li>
                    <Link to="/Contact">contact</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;