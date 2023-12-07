import styles from './styles.module.css'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'

import ImgMock from '@/assets/img/img_mock.jpg'

const Carousel = () => {
    return (
        <div className={styles.carousel}>
            <Link href='/'>
                <Image src={ImgMock} alt='' />
                <div className={styles.mask}>
                    {/* <div className={styles.navigation}>
                        <ArrowBackIosNew />
                        <ArrowForwardIos />
                    </div> */}
                    <div className={styles.content}>
                        <span>Autor</span>
                        <h3>
                            Neste tutorial vamos ensinar a como beber agua no pote de abacaxi utilizando next
                        </h3>
                    </div>
                    {/* <div className={styles.indicators}>
                        <div></div>
                        <div></div>
                        <div className={styles.active}></div>
                        <div></div>
                        <div></div>
                    </div> */}
                </div>
            </Link>
        </div>
    )
}

export default Carousel