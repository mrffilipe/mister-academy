import styles from './styles.module.css'

import Welcome from './Welcome'
import MainContent from './MainContent'
import Newsletter from './Newsletter'

const HomePage = () => {
    return (
        <section className={styles.home_page}>
            <Welcome />
            <MainContent />
            <Newsletter />
        </section>
    )
}

export default HomePage