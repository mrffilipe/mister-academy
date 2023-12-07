import SearchResult from './SearchResult'
import styles from './styles.module.css'

import Pagination from '@/components/Pagination'

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
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                </ul>
            </div>
            <Pagination />
        </section>
    )
}

export default Search