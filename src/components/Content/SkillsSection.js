import React from 'react'
import styles from '/Users/enriqueambrocio/Desktop/EnriqueAmbrocio/enrique-ambrocio/src/components/Content/SkillsSection.module.css'

function SkillsSection() {
    return (
        <section className={styles['skills-hero']}>
            <div className={styles['skills_hero_title']}>
                <h2>Skills</h2>
            </div>
            <div className={styles['skills-hero_content']}>
                <ul>
                    <li>
                        <p>HTML</p>
                    </li>
                    <li>
                        <p>CSS</p>
                    </li>
                    <li>
                        <p>JavaScript</p>
                    </li>
                    <li>
                        <p>React</p>
                    </li>
                    <li>
                        <p>Redux</p>
                    </li>
                    <li>
                        <p>Python</p>
                    </li>
                    <li>
                        <p>Pandas</p>
                    </li>
                    <li>
                        <p>Git</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default SkillsSection