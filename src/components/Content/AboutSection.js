import React from 'react'
import styles from '/Users/enriqueambrocio/Desktop/EnriqueAmbrocio/enrique-ambrocio/src/components/Content/AboutSection.module.css'
import profile from '/Users/enriqueambrocio/Desktop/EnriqueAmbrocio/enrique-ambrocio/src/IMG_0194.jpg'

function AboutSection() {
    return (
        <section className={styles['about-me_hero']}>
            <div className={styles['about-me_hero_title']}>
                <h2>About Me</h2>
            </div>
            <div className={styles['about-me_hero_content']}>
                <p>Hello my name is Enrique and I'm a previous SEO specialist with nearly 4 years of experience!</p>
                <img src={profile} alt='profile image' />
            </div>
        </section>
    )
}

export default AboutSection