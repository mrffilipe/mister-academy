import styles from './styles.module.css'

const AboutUs = () => {
    return (
        <div className={styles.about_us}>
            <div className={styles.toolbar}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.content}>
                <h1>Sobre nós</h1>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum aliquet magna sed semper. Integer pulvinar ac nunc ut aliquet.
                    </p>
                    <p>
                        Donec in semper enim, nec varius lorem. Donec bibendum, enim at ornare dignissim, augue tellus porta leo, ut iaculis mi lorem vitae lectus. Ut et rutrum nunc, quis sollicitudin orci.
                    </p>
                    <p>
                        Fusce sit amet accumsan mauris, et sollicitudin lacus. Aliquam erat volutpat. Phasellus aliquet sodales odio. Pellentesque luctus gravida leo in laoreet.
                    </p>
                    <p>
                        Morbi pharetra, lorem vitae maximus consequat, lorem diam consequat quam, vel blandit ex nisi et massa. Cras posuere rhoncus tortor a mollis.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs