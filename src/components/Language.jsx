import React from 'react'
import SectionLabel from './SectionLabel.jsx'
import styles from './Interests.module.css'

export default function Language({items}) {
    return (
        <section className={styles.section} id="language">
            <SectionLabel> Language/Framework</SectionLabel>
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