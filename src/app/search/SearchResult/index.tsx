import styles from './styles.module.css'

import Link from 'next/link'
import Image from 'next/image'

import PostTags from '@/components/PostTags'
import PostStats from '@/components/PostStats'

import MockImg from '@/assets/img/img_mock.jpg'

const SearchResult = () => {
    return (
        <li className={styles.search_result}>
            <Link href=''>
                <div className={styles.banner}>
                    <Image src={MockImg} alt='' />
                </div>
                <div className={styles.result_info}>
                    <div className={styles.result_header}>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero ex, vehicula quis varius sit amet, ullamcorper non metus. Nam eget tortor eget ex efficitur viverra.</p>
                    </div>
                    <div className={styles.result_content}>
                        <PostTags />
                        <PostStats />
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default SearchResult