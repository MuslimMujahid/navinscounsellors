import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import styles from './LawyerSection.module.scss'

const LawyerCarouselItem = ({item, handleDragStart}) => {

    const [{y, opacity}, set] = useSpring(() => ({ y: 150, opacity: 0}))

    return (
        <div className={styles.lawyerCarouselItem}
            onMouseEnter={() => set({y: 80, opacity: .7})}
            onMouseLeave={() => set({y: 150, opacity: 0})}
        >
            <div>
                <img 
                    src={item.image} 
                    onDragStart={handleDragStart} 
                />
                <div className={styles.squares}>
                    <animated.div 
                        className={styles.squareTop}
                        style={{ opacity }}
                    ></animated.div>
                    <animated.div 
                        className={styles.squareBottom}
                        style={{ transform: y.interpolate(v => `translateY(${v}%)`) }}
                    >
                        <p className={styles.name}>{ item.name }</p>
                        <p className={styles.role}>{ item.role }</p>
                        <div>
                            <Link to={item.link} className={styles.linkButton}>
                                {/* Open Profile */}
                                <NavigateNextIcon />
                            </Link>
                        </div>
                    </animated.div>
                </div>
            </div>
        </div>
    )
}

export default LawyerCarouselItem