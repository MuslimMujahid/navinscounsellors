import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import MenuIcon from '@material-ui/icons/Menu'
import { linkStateContext } from '../Context/linkStateContext'
import './style.scss'

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Header = () => {

    const [{y}, set] = useSpring(() => ({y: -150}))
    const [layer, setLayer] = useState(false)
    const linkStateCtx = useContext(linkStateContext)

    return (
        <header>
            <div className="email">
                <span>Email: info@navinscounsellors.com</span>
            </div>
            <nav>
                <div className="logo">
                    <img src="/images/logo5.jpg" alt="logo" />
                </div>
                <ul className="links links-lg">
                    <li className={linkStateCtx.state.home}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={linkStateCtx.state.about}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className={linkStateCtx.state.practiceArea}>
                        <Link to="/practice-area">Practice Area</Link>
                    </li>
                    <li className={linkStateCtx.state.lawyer}>
                        <Link to="/lawyer">Lawyer</Link>
                    </li>
                    <li className={'link-extended ' + linkStateCtx.state.publications}>
                        <div>
                            Publications
                            <ArrowDropDownIcon fontSize="small"/>
                        </div>
                        <ul className="sub-links">
                            
                            <li>
                                <Link to="/articles">Articles</Link>
                            </li>
                            <li>
                                <Link to="/career">Career</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={linkStateCtx.state.contactUs}>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                </ul>
                <div className="menu-button">
                    <MenuIcon 
                        style={{ fontSize: 40 }}
                        onClick={() => {
                            set({y: (-1 * (y.getValue()+150))})
                            setLayer(!layer)
                        }}
                    />
                </div>
                <animated.ul 
                    className="links-md"
                    style={{ transform: y.interpolate(v => `translateY(${v}%)`) }}
                >
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/practice-area">Practice Area</Link>
                    </li>
                    <li>
                        <Link to="/lawyer">Lawyer</Link>
                    </li>
                    <li className="link-extended">
                        <div>
                            Publications
                            <ArrowDropDownIcon fontSize="small"/>
                        </div>
                        <ul className="sub-links">
                            
                            <li>
                                <Link to="/articles">Articles</Link>
                            </li>
                            <li>
                                <Link to="/career">Career</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                </animated.ul>
            </nav>
            {layer && 
                <div 
                    className="layer"
                    onClick={() => {
                        set({y: (-1 * (y.getValue()+150))})
                        setLayer(!layer)
                    }}
                ></div>}
        </header>
    )
}

export default Header