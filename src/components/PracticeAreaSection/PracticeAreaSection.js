import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { languageContext } from '../Context/languageContext'
import { practice_area_en, practice_area_id } from '../items'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './PracticeAreaSection.module.scss'

export default function PracticeAreaSection() {
    
    const languageCtx = useContext(languageContext)
    const practice_area_data = languageCtx.lang === 'en' ? practice_area_en : practice_area_id

    return (
        <section className={styles.PracticeAreaSection}>
            <SectionTitle title="Our Practice Area" />
            <ul className={styles.items}>
            {
                practice_area_data.map(item => 
                    <li key={item.link}>
                        <Link to={item.link}>
                            <div className={styles.image}>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className={styles.caption}>
                                <div className={styles.square}>
                                    { item.title }
                                </div>
                            </div>
                        </Link>
                    </li>
                )
            }
            </ul>
        </section>
    )
}