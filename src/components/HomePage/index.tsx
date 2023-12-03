import styles from './styles.module.css'

import Link from 'next/link'
import Image from 'next/image'

import Carousel from './Carousel'
import LatestPublications from './LatestPublications'
import Categories from './Categories'
import AboutUs from './AboutUs'
import Newsletter from './Newsletter'

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
                        <Link href=''>Javascript</Link>
                    </li>
                    <li>
                        <Link href=''>C#</Link>
                    </li>
                    <li>
                        <Link href=''>NextJS</Link>
                    </li>
                </ul>
                <h3 className={styles.title}>Título do card que está publicado em meu blog</h3>
                <span className={styles.date}>há 20 dias</span>
            </Link>
        </div>
    )
}

const HomePage = () => {
    return (
        <section className={styles.home_page}>
            <AboutUs />
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
            <Newsletter />
        </section>
    )
}

export default HomePage