import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src="/images/logo2.jpg" alt="logo" />
                </div>
                <ul className="links">
                    <li>
                        <Link to="#">Home</Link>
                    </li>
                    <li>
                        <Link to="#">About</Link>
                    </li>
                    <li>
                        <Link to="#">Practice Area</Link>
                    </li>
                    <li>
                        <Link to="#">Lawyer</Link>
                    </li>
                    <li className="link-extended">
                        <div>
                            Publications
                            <ArrowDropDownIcon fontSize="small"/>
                        </div>
                        <ul className="sub-links">
                            
                            <li>
                                <Link to="#">Articles</Link>
                            </li>
                            <li>
                                <Link to="#">Career</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header