import styles from './styles.module.css'

import SocialMedias from './SocialMedias'

const Newsletter = () => {
    return (
        <div id='newsletter' className={styles.newsletter}>
            <div className={styles.desc}>
                <h2>Inscreva-se em nossa newsletter e receba todas as novidades</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mattis a est ac semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.
                </p>
            </div>
            <div className={styles.subscribe_form}>
                <form>
                    <span>Inscreva-se gratuitamente</span>
                    <input type="text" placeholder='Nome completo' required />
                    <input type="email" placeholder='E-mail' required />
                    <button type="submit">INSCREVA-SE</button>
                    <p>Fusce sit amet accumsan mauris, et sollicitudin lacus.</p>
                </form>
                <SocialMedias />
            </div>
        </div>
    )
}

export default Newsletter