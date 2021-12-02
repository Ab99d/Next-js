import React from 'react'
import Link from 'next/link'
import navstyle from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={navstyle.nav}>
            <div className={navstyle.container + " container"}>
                <div className={navstyle.logo}>This is logo</div>
                <ul>
                    <li>
                        <Link href="/homepage"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/About"><a>About</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>Cart</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
