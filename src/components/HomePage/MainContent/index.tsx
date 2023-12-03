import styles from './styles.module.css'

import Carousel from './Carousel'
import Card from './Card'

const MainContent = () => {
    return (
        <div className={styles.main_content}>
            <Carousel />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default MainContent