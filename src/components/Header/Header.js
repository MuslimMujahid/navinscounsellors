import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import MenuIcon from '@material-ui/icons/Menu'
import { linkStateContext } from '../Context/linkStateContext'
import { languageContext } from '../Context/languageContext'
import './style.scss'

import ArrowDropDownIcon  from '@material-ui/icons/ArrowDropDown';
import LanguageIcon from '@material-ui/icons/Language';
import CheckIcon from '@material-ui/icons/Check';

const Header = () => {

    const [{y}, set] = useSpring(() => ({y: -150}))
    const [layer, setLayer] = useState(false)
    const linkStateCtx = useContext(linkStateContext)
    const languageCtx = useContext(languageContext)

    const [extendMobileLanguage, setExtendMobileLanguage] = useState(false)
    const [extendMobilePublications, setExtendMobilePublications] = useState(false)

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
                    <li className="link-extended">
                        <div>
                            <LanguageIcon />
                            <ArrowDropDownIcon />
                        </div>
                        <ul className="sub-links">
                            
                            <li onClick={() => languageCtx.setLang('id')}>
                                ID 
                                {
                                    languageCtx.lang === 'id'
                                        && <CheckIcon style={{ fontSize: 20 }} /> 
                                }
                            </li>
                            <li onClick={() => languageCtx.setLang('en')}>
                                EN
                                {
                                    languageCtx.lang === 'en'
                                        && <CheckIcon style={{ fontSize: 20 }} /> 
                                }
                            </li>
                        </ul>
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
                    <li className="link-extended" onClick={() => setExtendMobilePublications(!extendMobilePublications)}>
                        <div>
                            Publications
                            <ArrowDropDownIcon fontSize="small"/>
                        </div>
                        {
                            extendMobilePublications &&
                            <ul className="sub-links">
                            
                                <li>
                                    <Link to="/articles">Articles</Link>
                                </li>
                                <li>
                                    <Link to="/career">Career</Link>
                                </li>
                            </ul>
                        }
                    </li>
                    <li>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <li className="link-extended" onClick={() => setExtendMobileLanguage(!extendMobileLanguage)}>
                        <div>
                            <LanguageIcon />
                            <ArrowDropDownIcon />
                        </div>
                        {
                            extendMobileLanguage &&
                            <ul className="sub-links">
                                <li onClick={() => languageCtx.setLang('id')}>
                                    ID 
                                    {
                                        languageCtx.lang === 'id'
                                            && <CheckIcon style={{ fontSize: 20 }} /> 
                                    }
                                </li>
                                <li onClick={() => languageCtx.setLang('en')}>
                                    EN
                                    {
                                        languageCtx.lang === 'en'
                                            && <CheckIcon style={{ fontSize: 20 }} /> 
                                    }
                                </li>
                            </ul>
                        }
                    </li>
                </animated.ul>
            </nav>
            {layer && 
                <div 
                    className="layer"
                    onClick={() => {
                        set({y: (-1 * (y.getValue()+150))})
                        setLayer(!layer)
                        setExtendMobileLanguage(false)
                        setExtendMobilePublications(false)
                    }}
                ></div>}
        </header>
    )
}

export default Header