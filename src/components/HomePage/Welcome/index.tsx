import styles from './styles.module.css'

import Link from 'next/link'

const Welcome = () => {
    return (
        <div className={styles.welcome}>
            <div className={styles.text}>
                <h1>Bem vindo a MisterAcademy</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum aliquet magna sed semper. Integer pulvinar ac nunc ut aliquet. Integer pulvinar ac nunc ut aliquet.
                </p>
                <Link href='#newsletter'>Inscreva-se em nossa Newsletter</Link>
            </div>
        </div>
    )
}

export default Welcome