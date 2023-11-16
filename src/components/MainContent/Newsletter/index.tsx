import styles from './styles.module.css'

import SocialMedias from './SocialMedias'

const Newsletter = () => {
    return (
        <div className={styles.newsletter}>
            <form>
                <input type="text" placeholder='Nome completo' required />
                <input type="email" placeholder='E-mail' required />
                <button type="submit">Assinar</button>
                <span>Fusce sit amet accumsan mauris, et sollicitudin lacus.</span>
            </form>
            <SocialMedias />
        </div>
    )
}

export default Newsletter