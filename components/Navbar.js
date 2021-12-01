import React from 'react'
import Link from 'next/link'
import NavStyle from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <div className={style.container + " container"}>
                <div className="logo">this is logo</div>
                <ul>
                    <li>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>About</a></Link>
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
