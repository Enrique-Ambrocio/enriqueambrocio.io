import React, { Fragment, useState } from 'react'
import styles from '/Users/enriqueambrocio/Desktop/EnriqueAmbrocio/enrique-ambrocio/src/components/UI/MainHeader.module.css'
import { BiMenu } from 'react-icons/bi'
import { MdCancel } from 'react-icons/md'

function MobileNavigation() {

    const [displayMenuItems, setDisplayMenuItems] = useState(false)

    function cancelHandler() {
        setDisplayMenuItems(false)
    }

    function onClickHandler() {
        setDisplayMenuItems(true)
    }

    let content;

    if (!displayMenuItems) {
        content = <BiMenu onClick={onClickHandler} />
    }


    if (displayMenuItems) {
        content = <Fragment>
            <MdCancel onClick={cancelHandler} />
            <ul>
                <li>Projects</li>
                <li>Skills</li>
                <li>Books</li>
                <li>Contact</li>
            </ul>
        </Fragment>
    }

    return (
        <div className={styles['header-nav_mobile']}>
            {content}
        </div>
    )
}

export default MobileNavigation