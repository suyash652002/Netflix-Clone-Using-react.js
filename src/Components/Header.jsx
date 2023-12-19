import React from 'react'
import logo from '../assets/Logonetflix.png'
import { Link } from 'react-router-dom'
import { ImSearch } from 'react-icons/im'
export default function Header() {
    return (
        <nav className='header'>
            <img src={logo} alt='Logo' />

            <div>
                <Link to='/tvshows'>TV Shows</Link>
                <Link to='/tvshows'>Movies</Link>
                <Link to='/tvshows'>Recently added</Link>
                <Link to='/tvshows'>My List</Link>
            </div>

            <ImSearch />
        </nav>
    )
}
