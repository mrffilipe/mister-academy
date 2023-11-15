import styles from './styles.module.css'

import Link from 'next/link'

const LatestPublications = () => {
    return (
        <aside className={styles.latest_pubs}>
            <h2>Últimas publicações</h2>
            <Link href='#' className={styles.post}>
                <span>Autor</span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in diam eget urna dapibus scelerisque sed ut elit.
                </p>
            </Link>
            <Link href='#' className={styles.post}>
                <span>Autor</span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in diam eget urna dapibus scelerisque sed ut elit.
                </p>
            </Link>
            <Link href='#' className={styles.post}>
                <span>Autor</span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in diam eget urna dapibus scelerisque sed ut elit.
                </p>
            </Link>
            <Link href='#' className={styles.post}>
                <span>Autor</span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in diam eget urna dapibus scelerisque sed ut elit.
                </p>
            </Link>
            <Link href='#' className={styles.post}>
                <span>Autor</span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in diam eget urna dapibus scelerisque sed ut elit.
                </p>
            </Link>
        </aside>
    )
}

export default LatestPublications