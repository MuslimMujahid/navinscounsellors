import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

import { practice_area_en } from './items'

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="hero">
                <img src="./images/banner.jpg" alt="Navigating Your Legal Needs"/>
                <div className="caption">
                    <h1>"Navigating Yout Legal Needs"</h1>

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
                <ul className="items">
                {
                    practice_area_en.map(item => 
                        <li key={item.link}>
                            <Link to={'practice-area/' + item.link}>
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
        </div>
    )
}

export default Homepage;