import styles from './styles.module.css'

import Link from 'next/link'
import Image from 'next/image'

import MockImg from '@/assets/img/img_mock.jpg'

const Item = () => {
    return (
        <li className={styles.item}>
            <Link href=''>
                <div className={styles.banner}>
                    <Image src={MockImg} alt='' />
                </div>
                <div className={styles.info}>
                    <div className={styles.item_header}>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero ex, vehicula quis varius sit amet, ullamcorper non metus. Nam eget tortor eget ex efficitur viverra.</p>
                    </div>
                    <div className={styles.item_content}>
                        <ul className={styles.item_tags}>
                            <li>C#</li>
                            <li>Java</li>
                            <li>Python</li>
                        </ul>
                        <div className={styles.item_stats}>
                            <span className={styles.author}>Filipe M. Ferracioli</span>
                            <span className={styles.views}>1.4m</span>
                            <span className={styles.date}>18/11/2023 às 21:08</span>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    )
}

const Search = () => {
    return (
        <section className={styles.search}>
            <h3>Resultados da busca</h3>
            <div className={styles.search_header}>
                <span>8 resultados</span>
                <div className={styles.order_by}>
                    <select>
                        <option value="">Data</option>
                        <option value="">Autor</option>
                        <option value="">Relevância</option>
                    </select>
                </div>
            </div>
            <div className={styles.results}>
                <ul>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </ul>
            </div>
            <div className={styles.navigation}>
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
        </section>
    )
}

export default Search