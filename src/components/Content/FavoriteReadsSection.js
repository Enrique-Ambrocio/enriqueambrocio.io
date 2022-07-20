import React from 'react'
import styles from '/Users/enriqueambrocio/Desktop/EnriqueAmbrocio/enrique-ambrocio/src/components/Content/FavoriteReadsSection.module.css'
import image from '/Users/enriqueambrocio/Desktop/EnriqueAmbrocio/enrique-ambrocio/src/zerotoone.jpg'
import computerScientist from '/Users/enriqueambrocio/Desktop/EnriqueAmbrocio/enrique-ambrocio/src/selftaughtcomputerscientist.jpg'
import startupJCurve from '/Users/enriqueambrocio/Desktop/EnriqueAmbrocio/enrique-ambrocio/src/theStartupJCurve.jpg'
import cleanCode from '/Users/enriqueambrocio/Desktop/EnriqueAmbrocio/enrique-ambrocio/src/cleancode.jpg'
import shoeDog from '/Users/enriqueambrocio/Desktop/EnriqueAmbrocio/enrique-ambrocio/src/shoeDog.jpg'
import blueOcean from '/Users/enriqueambrocio/Desktop/EnriqueAmbrocio/enrique-ambrocio/src/blueOcean.jpg'

function FavoriteReadsSection() {
    return (
        <section className={styles['books-hero']} id='books'>
            <div className={styles['books-hero_title']}>
                <h2>Favorite Reads</h2>
            </div>
            <div className={styles['books-hero_content']}>
                <ul>
                    <li>
                        <ul className={styles['books-hero_content_book']}>
                            <li>
                                <img src={image} alt='Zero to One' />
                            </li>
                            <li>
                                <p>Zero to One <span>By Peter Thiel</span></p>
                            </li>
                            <li>
                                <a href='https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296' target="_blank" rel="noopener noreferrer">Amazon</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className={styles['books-hero_content_book']}>
                            <li>
                                <img src={computerScientist} alt='The Self Taught Computer Scientist' />
                            </li>
                            <li>
                                <p>The Self-Taught Computer Scietist <span>By Cory Althoff</span></p>
                            </li>
                            <li>
                                <a href='https://www.amazon.com/Self-Taught-Computer-Scientist-Beginners-Science/dp/1119724414' target="_blank" rel="noopener noreferrer">Amazon</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className={styles['books-hero_content_book']}>
                            <li>
                                <img src={startupJCurve} alt='The Start-Up J Curve' />
                            </li>
                            <li>
                                <p>The Start-Up J Curve<span> By Howard Love</span></p>
                            </li>
                            <li>
                                <a href='https://www.amazon.com/Start-Up-Curve-Steps-Entrepreneurial-Success/dp/162634292X' target="_blank" rel="noopener noreferrer">Amazon</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className={styles['books-hero_content_book']}>
                            <li>
                                <img src={cleanCode} alt='Clean Code' />
                            </li>
                            <li>
                                <p>Clean Code<span> By Robert C. Martin</span></p>
                            </li>
                            <li>
                                <a href='https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882' target="_blank" rel="noopener noreferrer">Amazon</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className={styles['books-hero_content_book']}>
                            <li>
                                <img src={shoeDog} alt='Shoe Dog' />
                            </li>
                            <li>
                                <p>Shoe Dog <span> By Phill Knight</span></p>
                            </li>
                            <li>
                                <a href='https://www.amazon.com/Shoe-Dog-Memoir-Creator-Nike-ebook/dp/B0176M1A44' target="_blank" rel="noopener noreferrer">Amazon</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className={styles['books-hero_content_book']}>
                            <li>
                                <img src={blueOcean} alt='Blue Ocean' />
                            </li>
                            <li>
                                <p>Blue Ocean <span> By W.Chan and Renee MauBorgne</span></p>
                            </li>
                            <li>
                                <a href='https://www.amazon.com/s?k=blue+ocean&ref=nb_sb_noss' target="_blank" rel="noopener noreferrer">Amazon</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default FavoriteReadsSection