import styles from './styles.module.css'

const Post = () => {
    const html = `<h2>Vamos falar sobre hamburguer</h2><p>Primeiro adicionaremos sal a carne</p><p>Depois fritaremos a carneDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguer</p><figure class="media"><oembed url="https://www.youtube.com/watch?v=XxxfQ7-aMrE&amp;ab_channel=Survivor-Topic"></oembed></figure><p>Depois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguerDepois comeremos este delicioso hamburguer</p>`

    return (
        <section className={styles.post}>
            <div className={styles.post_header}>
                <h1 className={styles.title}>Título do post</h1>
                <p className={styles.resume}>Resumo do post</p>
                <div className={styles.post_details}>
                    <span className={styles.author}><strong>Por</strong> Filipe M. Ferracioli</span>
                    <span className={styles.views}>1.4M vizualizações</span>
                    <span className={styles.date}>18/11/2023 às 21:08</span>
                    <ul className={styles.tags}>
                        <li>C#</li>
                        <li>Java</li>
                        <li>Python</li>
                    </ul>
                </div>
            </div>
            <div className={styles.post_content} dangerouslySetInnerHTML={{ __html: html }}></div>
        </section>
    )
}

export default Post