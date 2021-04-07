import React, { useEffect, useContext } from 'react'
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom'
import { linkStateContext } from '../Context/linkStateContext'
import 'react-alice-carousel/lib/alice-carousel.css';
import { lawyer_en } from '../items'
import LawyerCarouselItem from './LawyerCarouselItem'
import { Address, Copyright } from '../Footer/Footer'
import SectionTitle from '../SectionTitle/SectionTitle'
import AboutSection from '../AboutSection/AboutSection'
import PracticeAreaSection from '../PracticeAreaSection/PracticeAreaSection'
import { languageContext } from '../Context/languageContext'

import MetaTags from 'react-meta-tags'
import './style.scss'

const handleDragStart = (e) => e.preventDefault();

// This items goes to the lawyer section
const lawyer_carousel_items = lawyer_en.map(item => 
    <LawyerCarouselItem 
        item={item} 
        handleDragStart={handleDragStart} 
    />
)

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
                
                {/* Start of about section */}
                <AboutSection />
                {/* End of about section */}

                {/* Start of practice area section */}
                <PracticeAreaSection />
                {/* End of practice area section */}

                {/* Start of lawyer section */}
                <section className="lawyer">
                    <SectionTitle title="Our Legal Team" />
                    <AliceCarousel 
                        mouseTracking 
                        items={lawyer_carousel_items}
                        autoPlay={true}
                        responsive= {{ 0 : { items: 1 }, 768 : { items: 2 }, 1224 : { items: 4 }}}
                        infinite={true}
                        animationDuration={1000}
                        autoPlayInterval={2000}
                    />
                </section>

                {/* End of lawyer section */}
                
                {/* Start of footer */}
                <footer>
                    <Address />
                    <Copyright />
                </footer>
                {/* End of footer */}
            </div>
        </React.Fragment>
    )
}

export default Homepage;