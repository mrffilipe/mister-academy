import styles from './styles.module.css'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'

import ImgMock from '@/assets/img/img_mock.jpg'

const Carousel = () => {
    return (
        <div className={styles.carousel_container}>
            <Link href='#' className={styles.carousel}>
                <Image src={ImgMock} alt='' />
                <div className={styles.mask}>
                    <div className={styles.navigation}>
                        <ArrowBackIosNew />
                        <ArrowForwardIos />
                    </div>
                    <div className={styles.content}>
                        <span>Autor</span>
                        <h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in diam eget urna dapibus scelerisque sed ut elit.
                        </h3>
                    </div>
                    <div className={styles.indicators}>
                        <div></div>
                        <div></div>
                        <div className={styles.active}></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Carousel