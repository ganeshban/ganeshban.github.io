import React from 'react'
import styles from './Sidebar.module.css'

export default function Sidebar({ data }) {
    const { name, title, avatar, location, available, contact } = data
    const contactEntries = Object.entries(contact || {}).filter(([, v]) => v)

    return (
        <aside className={styles.sidebar}>
            {avatar && (
                <div className={styles.avatarWrap}>
                    <img src={avatar} alt={name} onError={e => (e.target.style.display = 'none')} />
                </div>
            )}

            <div className={styles.name}>{name}</div>
            <div className={styles.title}>{title}</div>
            {location && <div className={styles.location}>⌖ {location}</div>}

            {available && (
                <div className={styles.badge}>
                    <span className={styles.dot} />
                    Available for work
                </div>
            )}

            <div className={styles.divider} />

            <nav className={styles.nav}>
                {['about', 'experience', 'projects', 'interests', 'contact'].map(s => (
                    <a key={s} href={`#${s}`}>{s}</a>
                ))}
            </nav>

            <div className={styles.contactLinks}>
                {contactEntries.map(([key, value]) => (
                    <a
                        key={key}
                        href={key === 'email' ? `mailto:${value}` : value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactLink}
                    >
                        ↗ {key.charAt(0).toUpperCase() + key.slice(1)}
                    </a>
                ))}
            </div>
        </aside>
    )
}