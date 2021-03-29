import React, { useEffect, useContext } from 'react'
import { Address, Copyright } from '../Footer/Footer'
import { linkStateContext } from '../Context/linkStateContext'
import MetaTags from 'react-meta-tags'
import styles from './style.module.scss'

function ContactUspage() {
    const linkStateCtx = useContext(linkStateContext)
    useEffect(() =>  {
        linkStateCtx.set({
            home: '',
            about: '',
            practiceArea: '',
            lawyer: '',
            publications: '',
            contactUs: 'active',
        })
        window.scrollTo(0, 0)
    }, [])

    return (
        <React.Fragment>
            <MetaTags>
                <title>Contact Us | NAV|INS Co.</title>
                <meta id="meta-description" name="description" content="NAV|INS Counsellors At Law - Navigating Your Legan Needs. Understanding deeply needs and interests of Our Clients is the way and approach that we take to provide legal services to Our Clients." />
                <meta id="og-title" property="og:title" content="NAV|INS Co." />
            </MetaTags>
            <div className={styles.ContactUspage}>

                <h1>Gettin Touch with us!</h1>

                <form className={styles.formContact}>
                    <div className={styles.inputRow}>
                        <div className={styles.inputControl}>
                            <label for="firstNme">FIRST NAME</label>
                            <input id="firstName" type="text" /> 
                        </div>
                        <div className={styles.inputControl}>
                            <label for="lastName">LAST NAME</label>
                            <input id="lastName" type="text"/> 
                        </div>
                    </div>
                    <div className={styles.inputControl}>
                        <label for="email">EMAIL</label>
                        <input type="email" id="email"/> 
                    </div>
                    <div className={styles.inputControl}>
                        <label for="message">MESSAGE</label>
                        <input type="text" id="message"/> 
                    </div>
                    <div className={styles.inputControl}>
                        <label for="additional">ADDITIONAL DETAILS</label>
                        <textarea id="additional"></textarea>
                    </div>
                    <button>Send Email</button>
                </form>

                <footer>
                    <Address />
                    <Copyright />
                </footer>
            </div>
        </React.Fragment>
    )
}

export default ContactUspage