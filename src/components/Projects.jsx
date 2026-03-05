import React from 'react'
import SectionLabel from './SectionLabel.jsx'
import styles from './Projects.module.css'

export default function Projects({ items }) {
    return (
        <section className={styles.section} id="projects">
            <SectionLabel>Projects</SectionLabel>
            <div className={styles.list}>
                {items.map((p, i) => (
                    <a
                        key={i}
                        href={p.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card}
                    >
                        <div className={styles.cardLeft}>
                            <div className={styles.index}>0{i + 1}</div>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.cardTop}>
                                <span className={styles.name}>{p.name}</span>
                                {p.tags?.length > 0 && (
                                    <div className={styles.tags}>
                                        {p.tags.map(t => <span className={styles.tag} key={t}>{t}</span>)}
                                    </div>
                                )}
                            </div>
                            {p.description && <p className={styles.desc}>{p.description}</p>}
                        </div>
                        <div className={styles.arrow}>↗</div>
                    </a>
                ))}
            </div>
        </section>
    )
}