import React from 'react'
import Navigation from '../components/Navigation'
import { Link } from 'react-router-dom'
import ROUTES from '../constants/routes'

const Home = () => {
    return (
        <>
            <div>Home</div>
            <Link to={ROUTES.ABOUT}>Ga naar over ons</Link>
        </>
    )
}

export default Home