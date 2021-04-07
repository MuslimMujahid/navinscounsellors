import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { linkStateContext } from '../Context/linkStateContext'
import 'react-alice-carousel/lib/alice-carousel.css';
import { Address, Copyright } from '../Footer/Footer'
import AboutSection from '../AboutSection/AboutSection'
import PracticeAreaSection from '../PracticeAreaSection/PracticeAreaSection'
import LawyerSection from '../LawyerSection/LawyerSection'
import { languageContext } from '../Context/languageContext'

import MetaTags from 'react-meta-tags'
import './style.scss'

const Homepage = () => {

    const linkStateCtx = useContext(linkStateContext)
    const languageCtx = useContext(languageContext)

    const lang = languageCtx.lang

    useEffect(() => {
        window.scrollTo(0, 0);
        linkStateCtx.set({
            home: 'active',
            about: '',
            practiceArea: '',
            lawyer: '',
            publications: '',
            contactUs: '',
        })
    }, [])

    return (
        <React.Fragment>
            <MetaTags>
                <title>Home | NAV|INS Co.</title>
                <meta id="meta-description" name="description" content="NAV|INS Counsellors At Law - Navigating Your Legan Needs. Understanding deeply needs and interests of Our Clients is the way and approach that we take to provide legal services to Our Clients." />
                <meta id="og-title" property="og:title" content="NAV|INS Co." />
            </MetaTags>
            <div className="homepage">
                <div className="hero">
                    <img src="./images/banner-min.jpg" alt="Navigating Your Legal Needs"/>
                    <div className="caption">
                        <h1>Navigating Your Legal Needs</h1>

                        {/* Contact us button */}
                        <Link to="/contact-us" className="contact-us">
                            { (lang === 'en'? 'Contact Us':'Kontak Kami')}
                        </Link>
                    </div>

                    {/* Black Layer */}
                    <div className="layer"></div>
                </div>

                <AboutSection />
                <PracticeAreaSection />
                <LawyerSection />

                <footer>
                    <Address />
                    <Copyright />
                </footer>
            </div>
        </React.Fragment>
    )
}

export default Homepage;