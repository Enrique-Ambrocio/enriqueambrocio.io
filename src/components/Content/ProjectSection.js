import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiJavascript1 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import styles from '/Users/enriqueambrocio/Desktop/EnriqueAmbrocio/enrique-ambrocio/src/components/Content/ProjectSection.module.css'
import productivity from '/Users/enriqueambrocio/Desktop/EnriqueAmbrocio/enrique-ambrocio/src/ProductivityApp.png'

function ProjectSection() {
    return (
        <section className={styles['project-hero']} id='projects'>
            <div className={styles['project-hero_title']}>
                <h2>Projects I've Built</h2>
            </div>
            <div className={styles['project-hero_content']}>
                <ul className={styles['project-hero_content_container']}>
                    <li>
                        <ul className={styles['project-hero_content_project']}>
                            <li className={styles['project-hero_content_project_description']}>
                                <div className={styles['project-hero_content_project_content']}>
                                    <h3>Productivity App</h3>
                                    <p>A To-Do List application that renders a list based on input</p>
                                </div>
                                <div className={styles['project-hero_content_project_content_image']}>
                                    <img src={productivity} alt='Productivity App' />
                                </div>
                            </li>
                            <li>
                                <p>Technologies Used</p>
                                <FaReact />
                                <AiFillHtml5 />
                                <DiCss3 />
                                <DiJavascript1 />
                            </li>
                            <li className={styles['project-hero_content_project_button']}>
                                <a href='https://productivityapp-ee8f8.web.app/' target="_blank" rel="noopener noreferrer">View Demo</a>
                                <a href='https://github.com/Enrique-Ambrocio/ProductivityApp' target="_blank" rel="noopener noreferrer">View Code</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className={styles['project-hero_content_project']}>
                            <li className={styles['project-hero_content_project_description']}>
                                <div className={styles['project-hero_content_project_content']}>
                                    <h3>Productivity App</h3>
                                    <p>A To-Do List application that renders a list based on input</p>
                                </div>
                                <div className={styles['project-hero_content_project_content_image']}>
                                    <img src={productivity} alt='Productivity App' />
                                </div>
                            </li>
                            <li>
                                <p>Technologies Used</p>
                                <FaReact />
                                <AiFillHtml5 />
                                <DiCss3 />
                                <DiJavascript1 />
                            </li>
                            <li className={styles['project-hero_content_project_button']}>
                                <a href='https://productivityapp-ee8f8.web.app/' target="_blank" rel="noopener noreferrer">View Demo</a>
                                <a href='https://github.com/Enrique-Ambrocio/ProductivityApp' target="_blank" rel="noopener noreferrer">View Code</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className={styles['project-hero_content_project']}>
                            <li className={styles['project-hero_content_project_description']}>
                                <div className={styles['project-hero_content_project_content']}>
                                    <h3>Productivity App</h3>
                                    <p>A To-Do List application that renders a list based on input</p>
                                </div>
                                <div className={styles['project-hero_content_project_content_image']}>
                                    <img src={productivity} alt='Productivity App' />
                                </div>
                            </li>
                            <li>
                                <p>Technologies Used</p>
                                <FaReact />
                                <AiFillHtml5 />
                                <DiCss3 />
                                <DiJavascript1 />
                            </li>
                            <li className={styles['project-hero_content_project_button']}>
                                <a href='https://productivityapp-ee8f8.web.app/' target="_blank" rel="noopener noreferrer">View Demo</a>
                                <a href='https://github.com/Enrique-Ambrocio/ProductivityApp' target="_blank" rel="noopener noreferrer">View Code</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default ProjectSection