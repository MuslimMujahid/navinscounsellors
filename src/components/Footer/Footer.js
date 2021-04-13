import React from 'react'
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
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
                <address className="vcard content-item">
                    <span className="fn org content-title">Jakarta Office</span>
                    <span className="adr">
                        <table>
                            <tbody>
                                <tr>
                                    <td><RoomIcon/></td>
                                    <td>
                                        <span className="locality">Epicentrum Walk Lantai 3 Suite A306-307</span>
                                        <span>Kawasan Rasuna Episentrum</span>  
                                        <span className="street-address">Jl. H.R. Rasuna Said, Kuningan</span>
                                        <div>
                                            <span className="region">Jakarta Selatan</span>
                                            <span className="postal-code">12940</span>
                                        </div>
                                        {/* <span className="country-name">Indonesia</span> */}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </span>
                </address>
                <address className="content-item">
                    <table>
                        <tbody>
                            <tr>
                                <td><PhoneIcon /></td>
                                <td><p> 021-29912275</p></td>
                            </tr>
                        </tbody>
                    </table>
                </address>
                <address className="content-item">
                    <table>
                        <tbody>
                            <tr>
                                <td><MailOutlineIcon /></td>
                                <td><p> info@navinscounsellors.com</p></td>
                            </tr>
                        </tbody>
                    </table>
                </address>
                <div className="content-item">
                    <table>
                        <tbody>
                            <tr>
                                <td><AccessAlarmIcon /></td>
                                <td><p> Mon - Fri 09.00 - 17.00 </p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <div className="content">
                <address className="vcard content-item">
                    <span className="fn org content-title">Makassar Office</span>
                    <table>
                        <tbody>
                            <tr>
                                <td><RoomIcon /></td>
                                <td>
                                    <span className="adr">
                                        <span className="locality">Gedung Graha Pena Lantai 5 Kav.507</span>  
                                        <span className="street-address">Jl. Urip Sumohardjo No. 20</span>
                                        <div>
                                            <span className="region">Makassar</span>
                                            <span className="postal-code">90234</span>
                                        </div>
                                        {/* <span className="country-name">Indonesia</span> */}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </address>
                <address className="content-item">
                    <table>
                        <tbody>
                            <tr>
                                <td><PhoneIcon /></td>
                                <td><p> 0411-3662100</p></td>
                            </tr>
                        </tbody>
                    </table>
                </address>
                <address className="content-item">
                    <table>
                        <tbody>
                            <tr>
                                <td><MailOutlineIcon /></td>
                                <td><p> info@navinscounsellors.com </p></td>
                            </tr>
                        </tbody>
                    </table>
                </address>
                <div className="content-item">
                    <table>
                        <tbody>
                            <tr>
                                <td><AccessAlarmIcon /></td>
                                <td><p> Mon - Fri 09.00 - 17.00 </p></td>
                            </tr>
                        </tbody>
                    </table>
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