import styles from './styles.module.css'

import Carousel from './Carousel'
import Categories from './Categories'

const MainContent = () => {
    return (
        <div className={styles.main_content}>
            <Carousel />
            <Categories />
        </div>
    )
}

export default MainContent