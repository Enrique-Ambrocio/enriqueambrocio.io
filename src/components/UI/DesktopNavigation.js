import React from 'react'
import styles from '/Users/enriqueambrocio/Desktop/EnriqueAmbrocio/enrique-ambrocio/src/components/UI/MainHeader.module.css'

function DesktopNavigation() {
    return (
        <div className={styles['header-nav_desktop']}>
            <ul>
                <li>
                    <a href='#projects'>Projects</a>
                </li>
                <li>
                    <a href='#skills'>Skills</a>
                </li>
                <li>
                    <a href='#books'>Books</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default DesktopNavigation