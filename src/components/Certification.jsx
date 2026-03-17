import SectionLabel from './SectionLabel.jsx'
import styles from './Certification.module.css'
import React from "react";


export default function Certification({items}) {


    return (
        <section className={styles.section} id="certification">
            <SectionLabel> Certifications</SectionLabel>
            <div >
                {items.map((item, i) => (
                    <a

                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card}
                    >

                        <div className={styles.item} key={i}>

                            <span className={styles.info}>{item.name}</span>
                        </div>
                        <span className={styles.arrow}>↗</span>
                    </a>
                ))}
            </div>
        </section>
    )
}