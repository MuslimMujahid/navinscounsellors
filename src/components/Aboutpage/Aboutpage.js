import React, { useEffect, useContext } from 'react'
import MetaTags from 'react-meta-tags'
import AboutSection from '../AboutSection/AboutSection'
import { linkStateContext } from '../Context/linkStateContext'
import { Address, Copyright } from '../Footer/Footer'
import styles from './Aboutpage.module.scss'

export default function AboutPage() {

    const linkStateCtx = useContext(linkStateContext)
    useEffect(() => {
        linkStateCtx.set({
            home: '',
            about: 'active',
            practiceArea: '',
            lawyer: '',
            publications: '',
            contactUs: '',
        })
    }, [])

    return (
        <React.Fragment>
            <MetaTags>
                <title>About | NAV|INS Co.</title>
                <meta id="meta-description" name="description" content="NAV|INS Counsellors At Law - Navigating Your Legan Needs. Understanding deeply needs and interests of Our Clients is the way and approach that we take to provide legal services to Our Clients." />
                <meta id="og-title" property="og:title" content="NAV|INS Co." />
            </MetaTags>
            <div className={styles.AboutPage}>
                
                <AboutSection />

                <footer>
                    <Address />
                    <Copyright />
                </footer>
            </div>
        </React.Fragment>
    )
}