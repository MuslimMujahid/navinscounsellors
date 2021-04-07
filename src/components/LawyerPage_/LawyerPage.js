import React, { useEffect, useContext } from 'react'
import LawyerSection from '../LawyerSection/LawyerSection'
import { Address, Copyright } from '../Footer/Footer'
import { linkStateContext } from '../Context/linkStateContext'
import MetaTags from 'react-meta-tags'
import styles from './LawyerPage.module.scss'

export default function LawyerPage_() {

    const linkStateCtx = useContext(linkStateContext)

    useEffect(() => {
        window.scrollTo(0, 0);
        linkStateCtx.set({
            home: '',
            about: '',
            practiceArea: '',
            lawyer: 'active',
            publications: '',
            contactUs: '',
        })
    }, [])

    return (
        <React.Fragment>
            <MetaTags>
                <title>Lawyer | NAV|INS Co.</title>
                <meta id="meta-description" name="description" content="NAV|INS Counsellors At Law - Navigating Your Legan Needs. Understanding deeply needs and interests of Our Clients is the way and approach that we take to provide legal services to Our Clients." />
                <meta id="og-title" property="og:title" content="NAV|INS Co." />
            </MetaTags>
            <div className={styles.LawyerPage}>
                <LawyerSection />

                <footer>
                    <Address />
                    <Copyright />
                </footer>
            </div>
        </React.Fragment>
    )
}