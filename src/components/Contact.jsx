import React from 'react'
import SectionLabel from './SectionLabel.jsx'
import styles from './Contact.module.css'

const ICONS = {
    email: (
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="5" width="16" height="11" rx="1.5" />
            <path d="M2 6.5l8 5.5 8-5.5" />
        </svg>
    ),
    github: (
        <svg viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 2a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38v-1.33c-2.23.49-2.7-1.07-2.7-1.07-.36-.93-.89-1.17-.89-1.17-.73-.5.06-.49.06-.49.8.06 1.23.83 1.23.83.71 1.22 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.83-2.14-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82a7.6 7.6 0 014 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.52.56.83 1.27.83 2.14 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.14.46.55.38A8 8 0 0010 2z" />
        </svg>
    ),
    linkedin: (
        <svg viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 3a2 2 0 110 4 2 2 0 010-4zM3 8h4v9H3V8zm6 0h3.6v1.3h.05A3.95 3.95 0 0116.1 8c3.5 0 4.9 2.3 4.9 5.3V17h-4v-3.3c0-1.3-.5-2.2-1.6-2.2-.9 0-1.4.6-1.6 1.1-.1.2-.1.5-.1.8V17H9V8z" />
        </svg>
    ),
    twitter: (
        <svg viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.44 5.24a3.5 3.5 0 01-1 .27 1.75 1.75 0 00.77-1 3.48 3.48 0 01-1.1.43 1.74 1.74 0 00-2.97 1.59A4.94 4.94 0 013.4 4.7a1.74 1.74 0 00.54 2.32 1.73 1.73 0 01-.79-.22v.02a1.74 1.74 0 001.4 1.71 1.75 1.75 0 01-.79.03 1.74 1.74 0 001.63 1.21 3.5 3.5 0 01-2.57.72 4.93 4.93 0 002.67.78c3.2 0 4.95-2.65 4.95-4.95l-.01-.22a3.52 3.52 0 00.87-.9z" />
        </svg>
    ),
    website: (
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="10" cy="10" r="8" />
            <path d="M2 10h16M10 2a12 12 0 010 16M10 2a12 12 0 000 16" />
        </svg>
    ),
}

function getIcon(key) {
    return ICONS[key.toLowerCase()] || ICONS.website
}

function getLabel(key, value) {
    if (key === 'email') return value
    try { return new URL(value).hostname.replace('www.', '') } catch { return value }
}

export default function Contact({ contact }) {
    const entries = Object.entries(contact).filter(([, v]) => v)

    return (
        <section className={styles.section} id="contact">
            <SectionLabel>Contact</SectionLabel>
            <div className={styles.list}>
                {entries.map(([key, value]) => (
                    <a
                        key={key}
                        href={key === 'email' ? `mailto:${value}` : value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card}
                    >
                        <span className={styles.icon}>{getIcon(key)}</span>
                        <div className={styles.info}>
                            <span className={styles.type}>{key}</span>
                            <span className={styles.value}>{getLabel(key, value)}</span>
                        </div>
                        <span className={styles.arrow}>↗</span>
                    </a>
                ))}
            </div>
        </section>
    )
}