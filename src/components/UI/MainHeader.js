import React from 'react'
import styles from '/Users/enriqueambrocio/Desktop/EnriqueAmbrocio/enrique-ambrocio/src/components/UI/MainHeader.module.css'

function MainHeader() {
    return (
        <header className={styles['header']}>
            <div className={styles['header-logo']}>
                <h1>EA</h1>
            </div>
            <nav className={styles['header-nav']}>
                <ul>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Fav Books</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader