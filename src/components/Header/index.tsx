'use client'

import styles from './styles.module.css'

import { useState } from 'react'
import Link from 'next/link'
import { MenuOutlined, SearchOutlined } from '@mui/icons-material'

import Button from '../Button'

const Header = () => {
    const [showMenu, setShowMenu] = useState<boolean>()
    const [showSearch, setShowSearch] = useState<boolean>()

    const handleToggleMenu = (): void => {
        if (showSearch) {
            setShowSearch(!showSearch)
        }

        setShowMenu(!showMenu)
    }

    const handleToggleSearch = (): void => {
        if (showMenu) {
            setShowMenu(!showMenu)
        }

        setShowSearch(!showSearch)
    }

    return (
        <header className={styles.header}>
            <Button icon={MenuOutlined} onClick={handleToggleMenu} />
            <Link href='/' className={styles.logo}>
                Mister
                <span>Academy</span>
            </Link>
            <Button icon={SearchOutlined} onClick={handleToggleSearch} />
            <div className={showSearch ? styles.search : styles.close}>
                <input type="text" placeholder='Pesquisar...' />
            </div>
            <nav className={showMenu ? styles.navigation : styles.close}>
                <ul>
                    <li>
                        <Link className={styles.active} href='#'>Home</Link>
                    </li>
                    <li>
                        <Link href='#'>Árvores</Link>
                    </li>
                    <li>
                        <Link href='#'>Tabelas</Link>
                    </li>
                    <li>
                        <Link href='#'>Grafos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header