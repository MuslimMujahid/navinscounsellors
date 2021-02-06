import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import './style.scss'

const LawyerCarouselItem = ({item, handleDragStart}) => {

    const [{y, opacity}, set] = useSpring(() => ({ y: 150, opacity: 0}))

    return (
        <div className="lawyer-carousel-item"
            onMouseEnter={() => set({y: 80, opacity: .7})}
            onMouseLeave={() => set({y: 150, opacity: 0})}
        >
            <div>
                <img 
                    src={item.image} 
                    onDragStart={handleDragStart} 
                />
                <div className="squares">
                    <animated.div 
                        className="square-top"
                        style={{ opacity }}
                    ></animated.div>
                    <animated.div 
                        className="square-bottom"
                        style={{ transform: y.interpolate(v => `translateY(${v}%)`) }}
                    >
                        <p className="name">{ item.name }</p>
                        <p className="role">{ item.role }</p>
                        <div>
                            <Link to={item.link} className="link-button">
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