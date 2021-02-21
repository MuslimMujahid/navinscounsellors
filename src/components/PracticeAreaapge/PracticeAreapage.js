import React, { useEffect } from 'react'
import { Address, Copyright } from '../Footer/Footer'
import { practice_area_en } from '../items' 
import styles from './style.module.scss'

function PracticeAreapage({ match: { params: { link } }}) {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    const data = practice_area_en.find(item => item.link === '/practice-area/' + link)
    return (
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
    )
}

export default PracticeAreapage
