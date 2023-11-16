import styles from './styles.module.css'

import Carousel from './Carousel'
import Categories from './Categories'
import AboutUs from './AboutUs'
import Newsletter from './Newsletter'

const MainContent = () => {
    return (
        <div className={styles.main_content}>
            <Carousel />
            <Categories />
            <AboutUs />
            <Newsletter />
        </div>
    )
}

export default MainContent