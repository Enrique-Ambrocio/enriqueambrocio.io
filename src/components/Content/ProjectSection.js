import React from 'react'
import styles from '/Users/enriqueambrocio/Desktop/EnriqueAmbrocio/enrique-ambrocio/src/components/Content/ProjectSection.module.css'

function ProjectSection() {
    return (
        <section className={styles['project-hero']}>
            <div className={styles['project-hero_title']}>
                <h2>Projects I've Built</h2>
            </div>
            <div className={styles['project-hero_content']}>
                <ul>
                    <li>
                        <ul className={styles['project-hero_content_project']}>
                            <li>
                                <h3>Job Helper</h3>
                            </li>
                            <li>
                                <p>Hello there!</p>
                            </li>
                            <li>
                                <button>Link</button>
                            </li>
                        </ul>
                    </li>
                    <li>Productivity App</li>
                    <li>Python</li>
                </ul>
            </div>
        </section>
    )
}

export default ProjectSection