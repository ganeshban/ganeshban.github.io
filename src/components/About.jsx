import React from 'react'
import SectionLabel from './SectionLabel.jsx'
import styles from './About.module.css'

export default function About({ bio }) {
    return (
        <section className={styles.section} id="about">
            <SectionLabel>About</SectionLabel>
            <p className={styles.bio}>{bio}</p>
        </section>
    )
}