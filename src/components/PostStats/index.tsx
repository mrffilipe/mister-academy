import styles from './styles.module.css'

import { HTMLAttributes } from 'react'

type Props = {
    className?: HTMLAttributes<HTMLUListElement> | string
}

const PostStats = (props: Props) => {
    return (
        <div className={`${styles.post_stats} ${props.className}`}>
            <span className={styles.author}>Por <strong>Filipe M. Ferracioli</strong></span>
            <span className={styles.views}><strong>1.4M</strong> vizualizações</span>
            <span className={styles.date}>18/11/2023 às 21:08</span>
        </div>
    )
}

export default PostStats