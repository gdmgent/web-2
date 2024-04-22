import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../constants/routes'

const Navigation = () => {
    return (
        <nav>
            <Link to={ROUTES.HOME}>Home</Link>
            <Link to={ROUTES.ABOUT}>About</Link>
            <Link to={ROUTES.BLOG}>Blog</Link>
            <Link to={ROUTES.CONTACT}>Contact</Link>
        </nav>
    )
}

export default Navigation