import styles from './styles.module.css'

import Link from 'next/link'
import Image from 'next/image'

const Search = () => {
    return (
        <section className={styles.search}>
            <h2>Resultados da busca</h2>
            <div className={styles.search_header}>
                <span>500 resultados</span>
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
                    <li className={styles.item}>
                        <Link href=''>
                            <Image src='' alt='' />
                            <div className={styles.info}>
                                <div className={styles.item_header}>
                                    <h4>Título</h4>
                                    <p>Resumo</p>
                                </div>
                                <div className={styles.item_content}>
                                    <ul className={styles.item_tags}>
                                        <li>Tag</li>
                                        <li>Tag</li>
                                        <li>Tag</li>
                                    </ul>
                                    <div className={styles.item_stats}>
                                        <span>Autor</span>
                                        <span>Vizualizações</span>
                                        <span>Data</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Search