import React, { useEffect, useContext } from 'react'
import { Address, Copyright } from '../Footer/Footer'
import { practice_area_en } from '../items' 
import { linkStateContext } from '../Context/linkStateContext'
import MetaTags from 'react-meta-tags'
import styles from './style.module.scss'

function PracticeAreapage({ match: { params: { link } }}) {
    
    const linkStateCtx = useContext(linkStateContext)
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
    }, [])
    
    const data = practice_area_en.find(item => item.link === '/practice-area/' + link)
    return (
        <React.Fragment>
            <MetaTags>
                <title>Practice Area - {data.title} | NAV|INS Co.</title>
                <meta id="meta-description" name="description" content="NAV|INS Counsellors At Law - Navigating Your Legan Needs. Understanding deeply needs and interests of Our Clients is the way and approach that we take to provide legal services to Our Clients." />
                <meta id="og-title" property="og:title" content="NAV|INS Co." />
            </MetaTags>
            <div className={styles.practiceAreapage}>
                {/* Banner */}
                <div className={styles.banner}>
                    <div className={styles.image}>
                        <img src={data.image} />
                    </div>
                    <div className={styles.layer}></div>
                    <div className={styles.caption}>
                        <h1>{ data.title }</h1>
                    </div>
                </div>

                {/* Cntent */}
                <div className={styles.content}>
                    <p>{ data.text }</p>
                </div>

                {/* Footer */}
                <footer>
                    <Address />
                    <Copyright />
                </footer>
            </div>
        </React.Fragment>
    )
}

export default PracticeAreapage
