import React from 'react'
import SectionLabel from './SectionLabel.jsx'
import styles from './Interests.module.css'

export default function Interests({ items }) {
    return (
        <section className={styles.section} id="interests">
            <SectionLabel>Interests</SectionLabel>
            <div className={styles.grid}>
                {items.map((item, i) => (
                    <div className={styles.item} key={i}>
                        <span className={styles.emoji}>{item.icon}</span>
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}