import styles from './styles.module.css'

import Link from 'next/link'
import Image from 'next/image'

import LinkedinSvg from '@/assets/svg/linkedin.svg'
import GithubSvg from '@/assets/svg/github.svg'
import InstagramSvg from '@/assets/svg/instagram.svg'

const SocialMedias = () => {
    return (
        <div className={styles.social_medias}>
            <Link href=''>
                <Image src={LinkedinSvg} alt='' />
            </Link>
            <Link href=''>
                <Image src={GithubSvg} alt='' />
            </Link>
            <Link href=''>
                <Image src={InstagramSvg} alt='' />
            </Link>
        </div>
    )
}

export default SocialMedias