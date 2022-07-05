import React from 'react'
import styles from '/Users/enriqueambrocio/Desktop/EnriqueAmbrocio/enrique-ambrocio/src/components/Content/MainHero.module.css'
// import profileImage from '/Users/enriqueambrocio/Desktop/EnriqueAmbrocio/enrique-ambrocio/src/IMG_0194.jpg'

function MainHero() {
    return (
        <section className={styles['main-hero']}>
            <div className={styles['main-hero_content']}>
                <h2>Greetings!</h2>
                <h2>My Name is <span>Enrique.</span></h2>
                <h2>And I'm a professional SEO specialist turned Developer.</h2>
            </div>
            <div className={styles['main-hero_button']}>
                <button>Check Out Resume</button>
            </div>
        </section>
    )
}

export default MainHero