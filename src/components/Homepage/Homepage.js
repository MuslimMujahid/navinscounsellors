import React from 'react'
import './style.scss'

const Homepage = () => {
    return (
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
    )
}

export default Homepage;