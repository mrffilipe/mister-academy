import styles from './styles.module.css'

import Link from 'next/link'
import Image from 'next/image'

import Logo from '@/assets/svg/logo.svg'

const Card = () => {
    return (
        <div className={styles.card}>
            <Link href='/'>
                <div className={styles.logo}>
                    <Image src={Logo} alt='Logo Mister Academy' />
                </div>
                <ul className={styles.tags}>
                    <li>
                        <Link href='/'>Javascript</Link>
                    </li>
                    <li>
                        <Link href='/'>C#</Link>
                    </li>
                    <li>
                        <Link href='/'>NextJS</Link>
                    </li>
                </ul>
                <h3 className={styles.title}>Título do card que está publicado em meu blog</h3>
                <span className={styles.date}>há 20 dias</span>
            </Link>
        </div>
    )
}

export default Card