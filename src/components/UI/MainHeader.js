import React from 'react'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import styles from '/Users/enriqueambrocio/Desktop/EnriqueAmbrocio/enrique-ambrocio/src/components/UI/MainHeader.module.css'

function MainHeader() {
    return (
        <header className={styles['header']}>
            <div className={styles['header-logo']}>
                <h1>EA</h1>
            </div>
            <nav className={styles['header-nav']}>
                <DesktopNavigation />
                <MobileNavigation />
            </nav>
        </header>
    )
}

export default MainHeader