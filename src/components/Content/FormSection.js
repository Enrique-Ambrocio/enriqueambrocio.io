import styles from '/Users/enriqueambrocio/Desktop/EnriqueAmbrocio/enrique-ambrocio/src/components/Content/FormSection.module.css'

function FormSection() {

    return (
        <section className={styles['form-hero']} id='contact'>
            <div className={styles['form-title']}>
                <h2>Get in Touch</h2>
                <p>Questions? Please be sure to reach out to me at: <span>enriqueambrocio628@gmail.com.</span></p>
            </div>
        </section>
    )

}

export default FormSection