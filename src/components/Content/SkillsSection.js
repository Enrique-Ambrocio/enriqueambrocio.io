import React from 'react'
import styles from '/Users/enriqueambrocio/Desktop/EnriqueAmbrocio/enrique-ambrocio/src/components/Content/SkillsSection.module.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { DiJavascript1 } from 'react-icons/di'
import { SiRedux } from 'react-icons/si'
import { FaPython } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { SiPandas } from 'react-icons/si'


function SkillsSection() {
    return (
        <section className={styles['skills-hero']} id='skills'>
            <div className={styles['skills_hero_title']}>
                <h2>Skills</h2>
                <p>Technologies I'm currently working with:</p>
            </div>
            <div className={styles['skills-hero_content']}>
                <ul>
                    <li>
                        <AiFillHtml5 />
                        <p>HTML</p>
                    </li>
                    <li>
                        <DiCss3 />
                        <p>CSS</p>
                    </li>
                    <li>
                        <DiJavascript1 />
                        <p>JavaScript</p>
                    </li>
                    <li>
                        <FaReact />
                        <p>React</p>
                    </li>
                    <li>
                        <SiRedux />
                        <p>Redux</p>
                    </li>
                    <li>
                        <FaPython />
                        <p>Python</p>
                    </li>
                    <li>
                        <SiPandas />
                        <p>Pandas</p>
                    </li>
                </ul>
            </div>
        </section >
    )
}

export default SkillsSection