'use client'

import styles from './styles.module.css'

import { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const Create = () => {
    const [data, setData] = useState<string>('')

    return (
        <section className={styles.create}>
            <h3>Nova publicação</h3>
            <div className={styles.editor}>
                <CKEditor
                    editor={ClassicEditor}
                    data={data}
                    onChange={(event, editor) => {
                        const data = editor.getData();

                        setData(data)
                    }}
                />
            </div>
            <div className={styles.post_footer}>
                <button className={styles.discard}>Descartar</button>
                <button className={styles.publish}>Publicar</button>
            </div>
            <div>
                {data}
            </div>
        </section>
    )
}

export default Create