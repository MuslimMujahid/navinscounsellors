import AliceCarousel from 'react-alice-carousel';
import SectionTitle from '../SectionTitle/SectionTitle'
import LawyerCarouselItem from './LawyerCarouselItem'
import { lawyer_en } from '../items'
import styles from './LawyerSection.module.scss'

const handleDragStart = (e) => e.preventDefault();

const lawyer_carousel_items = lawyer_en.map(item => 
    <LawyerCarouselItem 
        item={item} 
        handleDragStart={handleDragStart} 
    />
)

export default function LawyerSection() {
    return (
        <section className={styles.LawyerSection}>
            <SectionTitle title="Our Legal Team" />
            <AliceCarousel 
                mouseTracking 
                items={lawyer_carousel_items}
                autoPlay={true}
                responsive= {{ 0 : { items: 1 }, 768 : { items: 2 }, 1224 : { items: 4 }}}
                infinite={true}
                animationDuration={1000}
                autoPlayInterval={2000}
            />
        </section>
    )
}