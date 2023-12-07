import styles from './styles.module.css'

import Link from 'next/link'

const Pagination = () => {
    return (
        <div className={styles.pagination}>
            <Link href=''>Anterior</Link>
            <ul>
                <li>
                    <Link href=''>1</Link>
                </li>
                <li>
                    <Link href=''>2</Link>
                </li>
                <li>
                    <Link href=''>3</Link>
                </li>
            </ul>
            <Link href=''>Próximo</Link>
        </div>
    )
}

export default Pagination