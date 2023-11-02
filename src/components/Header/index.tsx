import styles from './styles.module.css'

import Link from 'next/link'

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href='/' className={styles.logo}>
                Mister
                <span>Academy</span>
            </Link>
            <div className={styles.menu}>
                <div className={styles.search}>
                    <input type="text" placeholder='Pesquisar...' />
                    
                </div>
                <nav className={styles.navigation}>
                    <ul>
                        <li>
                            <Link href='/learn/linear-lists'>Listas lineares</Link>
                        </li>
                        <li>
                            <Link href='/learn/trees'>Árvores</Link>
                        </li>
                        <li>
                            <Link href='/learn/hash-tables'>Tabelas hash</Link>
                        </li>
                        <li>
                            <Link href='/learn/graphs'>Grafos</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header