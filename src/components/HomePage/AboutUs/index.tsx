import styles from './styles.module.css'

import Link from 'next/link'

const AboutUs = () => {
    return (
        <div className={styles.about_us}>
            <div className={styles.text}>
                <h1>Bem vindo a MisterAcademy</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum aliquet magna sed semper. Integer pulvinar ac nunc ut aliquet. Integer pulvinar ac nunc ut aliquet.
                </p>
                <Link href=''>Inscreva-se em nossa Newsletter</Link>
            </div>
        </div>
    )
}

export default AboutUs