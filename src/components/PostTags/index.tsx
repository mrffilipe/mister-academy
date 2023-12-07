import styles from './styles.module.css'

import { HTMLAttributes } from 'react'

type Props = {
    className?: HTMLAttributes<HTMLUListElement> | string
}

const PostTags = (props: Props) => {
    return (
        <ul className={`${styles.tags} ${props.className}`}>
            <li>
                <span>C#</span>
            </li>
            <li>
                <span>Javascript</span>
            </li>
            <li>
                <span>NextJS</span>
            </li>
        </ul>
    )
}

export default PostTags