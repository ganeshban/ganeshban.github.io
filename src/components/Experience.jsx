import SectionLabel from './SectionLabel.jsx'
import styles from './Experience.module.css'

export default function Experience({ items }) {
    return (
        <section className={styles.section} id="experience">
            <SectionLabel>Experience</SectionLabel>
            <div className={styles.list}>
                {items.map((e, i) => (
                    <div className={styles.item} key={i}>
                        <div className={styles.header}>
                            <span className={styles.company}>{e.company}</span>
                            <span className={styles.period}>{e.period}</span>
                        </div>
                        <div className={styles.role}>{e.role}</div>
                        {e.points?.length > 0 && (
                            <ul className={styles.points}>
                                {e.points.map((pt, j) => (
                                    <li className={styles.point} key={j}>
                                        <span className={styles.bullet}>—</span>
                                        {pt}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {e.tags?.length > 0 && (
                            <div className={styles.tags}>
                                {e.tags.map(t => <span className={styles.tag} key={t}>{t}</span>)}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}