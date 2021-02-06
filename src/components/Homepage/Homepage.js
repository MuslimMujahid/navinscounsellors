import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom'

import './style.scss'
import 'react-alice-carousel/lib/alice-carousel.css';
import { practice_area_en, lawyer_en } from '../items'
import LawyerCarouselItem from './LawyerCarouselItem'
import { Address, Copyright } from '../Footer/Footer'
import SectionTitle from '../SectionTitle/SectionTitle'

const handleDragStart = (e) => e.preventDefault();

// This items goes to the lawyer section
const lawyer_carousel_items = lawyer_en.map(item => 
    <LawyerCarouselItem 
        item={item} 
        handleDragStart={handleDragStart} 
    />
)

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="hero">
                <img src="./images/banner.jpg" alt="Navigating Your Legal Needs"/>
                <div className="caption">
                    <h1>"Navigating Your Legal Needs"</h1>

                    {/* Contact us button */}
                    <button className="contact-us">
                        <div>Contact</div>
                        <div>Us</div>
                    </button>
                </div>

                {/* Black Layer */}
                <div className="layer"></div>
            </div>
            
            {/* Start of about section */}
            <section className="about">
                <div className="first-col">
                    <div className="image">
                        <img src="/images/building1.jpg" alt="What is NAV|INS Co."/>
                    </div>
                    <div className="caption">
                        <h3>What is NAV|INS Co.</h3>
                        <p>
                            NAV|INS Co. is a Law Office established and located in Indonesia. We have professional Lawyers with depth of knowledge and experience in their respective field. Understanding deeply the needs and interests of Our Clients is the way and approach that We take to provide legal services to Our Clients.
                        </p>
                    </div>
                    <div className="layer"></div>
                </div>
                <div className="second-col">
                    <div className="image">
                        <img src="/images/building2.jpg" alt="Why NAV|INS Co."/>
                    </div>
                    <div className="caption">
                        <h3>Why NAV|INS Co.?</h3>
                        <p>
                            We understand that Client’s Legal needs and interests are essential. Therefore, we always give Great Legal Teams who are creative, strong, and expert in their field, in order to be able to provide legal services to Our Clients professionally, in the basis of applicable regulations.
                        </p>
                    </div>
                    <div className="layer"></div>
                </div>
            </section>
            {/* End of about section */}

            {/* Start of practice area section */}
            <section className="practice-area">
                <SectionTitle title="Our Practice Area" />
                <ul className="items">
                {
                    practice_area_en.map(item => 
                        <li key={item.link}>
                            <Link to={item.link}>
                                <div className="image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="caption">
                                    <div className="triangle"></div>
                                    <div className="square">
                                        { item.title }
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                }
                </ul>
            </section>
            {/* End of practice area section */}

            {/* Start of lawyer section */}
            <section className="lawyer">
                <SectionTitle title="Meet Our Lawyers" />
                <AliceCarousel 
                    mouseTracking 
                    items={lawyer_carousel_items}
                    autoPlay={true}
                    responsive= {{ 0 : { items: 1 }, 1024 : { items: 4 }}}
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
    )
}

export default Homepage;