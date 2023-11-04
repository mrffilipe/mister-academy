import styles from './styles.module.css'

import { Icon } from '@mui/material'

type Props = {
    onClick?: () => void | undefined,
    icon: any
}

const Button = (props: Props) => {
    return (
        <button
            className={styles.button}
            onClick={props.onClick}
        >
            <Icon
                component={props.icon}
            />
        </button>
    )
}

export default Button