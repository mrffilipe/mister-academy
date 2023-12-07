import styles from './styles.module.css'

import PostStats from '@/components/PostStats'
import PostTags from '@/components/PostTags'

const Post = () => {
    const html = `<h2>Vamos falar sobre hamburguer</h2><p>Primeiro adicionaremos sal a carne</p><p>Depois fritaremos a carneDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguer</p><figure class="media"><oembed url="https://www.youtube.com/watch?v=XxxfQ7-aMrE&amp;ab_channel=Survivor-Topic"></oembed></figure><p>Depois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguer</p>
    <p>Depois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguer</p>`

    return (
        <section className={styles.post}>
            <div className={styles.post_header}>
                <h2 className={styles.title}>Título do post</h2>
                <p className={styles.resume}>Resumo do post</p>
                <PostStats className={styles.post_stats} />
                <PostTags />
            </div>
            <div className={styles.post_content} dangerouslySetInnerHTML={{ __html: html }}></div>
        </section>
    )
}

export default Post