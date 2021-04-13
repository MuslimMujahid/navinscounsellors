import React, { useEffect, useContext } from 'react'
import MetaTags from 'react-meta-tags'
import { linkStateContext } from '../Context/linkStateContext'
import { mobileMenuContext } from '../Context/mobileMenuContext'
import { layerContext } from '../Context/layerContext'

import PracticeAreaSection from '../PracticeAreaSection/PracticeAreaSection'
import { Address, Copyright } from '../Footer/Footer'
import styles from './PracticeAreaPage.module.scss'

export default function PracticeAreaPage_() {

    const linkStateCtx = useContext(linkStateContext)
    const mobileMenuCtx = useContext(mobileMenuContext)
    const layerCtx = useContext(layerContext)

    useEffect(() => {
        window.scrollTo(0, 0);
        linkStateCtx.set({
            home: '',
            about: '',
            practiceArea: 'active',
            lawyer: '',
            publications: '',
            contactUs: '',
        })
        mobileMenuCtx.setMobileMenu({y: -150})
        layerCtx.setLayer(false)
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