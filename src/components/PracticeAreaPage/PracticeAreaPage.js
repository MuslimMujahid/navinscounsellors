import React, { useEffect, useContext } from 'react'
import MetaTags from 'react-meta-tags'
import { linkStateContext } from '../Context/linkStateContext'
import PracticeAreaSection from '../PracticeAreaSection/PracticeAreaSection'
import { Address, Copyright } from '../Footer/Footer'
import styles from './PracticeAreaPage.module.scss'

export default function PracticeAreaPage() {

    const linkStateCtx = useContext(linkStateContext)

    useEffect(() => {
        linkStateCtx.set({
            home: '',
            about: '',
            practiceArea: 'active',
            lawyer: '',
            publications: '',
            contactUs: '',
        })
    }, [])

    return(
        <React.Fragment>
            <MetaTags>
                <title>Practice Area | NAV|INS Co.</title>
                <meta id="meta-description" name="description" content="NAV|INS Counsellors At Law - Navigating Your Legan Needs. Understanding deeply needs and interests of Our Clients is the way and approach that we take to provide legal services to Our Clients." />
                <meta id="og-title" property="og:title" content="NAV|INS Co." />
            </MetaTags>
            <div className={styles.PracticeAreaPage}>
                <PracticeAreaSection />

                <footer>
                    <Address />
                    <Copyright />
                </footer>
            </div>
        </React.Fragment>
    )
}