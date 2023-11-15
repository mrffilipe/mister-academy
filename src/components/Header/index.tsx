'use client'

import styles from './styles.module.css'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MenuOutlined, SearchOutlined } from '@mui/icons-material'

import Button from '../Button'

import Logo from '@/assets/svg/logo.svg'

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
                <Image src={Logo} alt='MisterAcademy logo' />
                <span>Mister<strong>Academy</strong></span>
            </Link>
            <Button icon={SearchOutlined} onClick={handleToggleSearch} />
            <div className={`${styles.search} ${showSearch ? '' : styles.close}`}>
                <input type="text" placeholder='Pesquisar...' />
            </div>
            <nav className={`${styles.navigation} ${showMenu ? '' : styles.close}`}>
                <ul>
                    <li>
                        <Link className={styles.active} href='#'>Home</Link>
                    </li>
                    <li>
                        <Link href='#'>Categorias</Link>
                    </li>
                    <li>
                        <Link href='#'>Sobre</Link>
                    </li>
                    <li>
                        <Link href='#'>Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header