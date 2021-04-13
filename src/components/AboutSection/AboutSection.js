import React, { useContext } from 'react'
import { languageContext } from '../Context/languageContext'
import { about_en, about_id } from '../items'
import styles from './AboutSection.module.scss'

export default function AboutSection() {

    const languageCtx = useContext(languageContext)
    const about_data = languageCtx.lang === 'en' ? about_en : about_id 

    return (
        <section className={styles.about}>
            <div className="first-col">
                <div className="image">
                    <img src="/images/building1-min.jpg" alt="What is NAV|INS Co. ?"/>
                </div>
                <div className={styles.caption}>
                    <h3>{ (languageCtx.lang === 'en' ? 'What is NAV|INS Co. ?':'Apa itu NAV|INS Co.?')}</h3>
                    <p>{ about_data[0] }</p>
                </div>
                <div className={styles.layer}></div>
            </div>
            <div className="second-col">
                <div className={styles.image}>
                    <img src="/images/building2-min.jpg" alt="Why NAV|INS Co."/>
                </div>
                <div className={styles.caption}>
                    <h3>{ (languageCtx.lang === 'en' ? 'Why NAV|INS Co. ?' : 'Mengapa NAV|INS Co. ?') }</h3>
                    <p>{ about_data[1] }</p>
                </div>
                <div className={styles.layer}></div>
            </div>
        </section>
    )
}