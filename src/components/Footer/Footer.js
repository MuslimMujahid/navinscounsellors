import React from 'react'
import { social } from '../items'
import './style.scss'

const Address = () => {
    return (
        <div className="contents">
            <div className="content">
                <h3 className="content-title">Connect With Us:</h3>
                <div className="content-item">
                    <ul className="social-media">
                    {
                        social.map(item => 
                            <li key={item.type}>
                                <a href={item.link} target="__blank">
                                    { item.icon }
                                </a>
                            </li>    
                        )
                    }
                    </ul>
                </div>
            </div>
            <div className="content">
                <address class="vcard content-item">
                    <span class="fn org content-title">Jakarta Office</span>
                    <span class="adr">
                        <span class="street-address">Jl. H.R. Rasuna Said, Kuningan</span>
                        <span class="locality">Epicentrum Walk Lantai 3 Suite A306-307</span>  
                        <span class="region">Jakarta Selatan</span>
                        <span class="postal-code">12940</span>
                        <span class="country-name">Indonesia</span>
                    </span>
                </address>
                <address className="content-item">
                    <p>Phone : -</p>
                    <p>Email  : info@navinscounsellors.com</p>
                </address>
                <div className="content-item">
                    <p>Work Hour : Mon - Fri 09.00 - 17.00 </p>
                </div>

            </div>
            <div className="content">
                <address class="vcard content-item">
                    <span class="fn org content-title">Makassar Office</span>
                    <span class="adr">
                        <span class="street-address">Jl. Urip Sumohardjo No. 20</span>
                        <span class="locality">Gedung Graha Pena Lantai 5 Kav.507</span>  
                        <span class="region">Makassar</span>
                        <span class="postal-code">90234</span>
                        <span class="country-name">Indonesia</span>
                    </span>
                </address>
                <address className="content-item">
                    <p>Email : info@navinscounsellors.com </p>
                </address>
                <div className="content-item">
                    <p>Work Hour : Mon - Fri 09.00 - 17.00 </p>
                </div>

            </div>
        </div>
    )
}

const Copyright = () => {
    return (
        <div className="copyright">
            <span>Copyright © 2021 navinscounsellors.com. All Rights Reserved</span>
        </div>
    )
}

export { Address, Copyright }