import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
  return (
    <nav>
        <h1>
            <Link to="/books">Books</Link>
        </h1>
        <ul>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/books/new">Add Book</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar