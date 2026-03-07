import React, { useState, useEffect, useRef } from 'react'
import SectionLabel from './SectionLabel.jsx'
import styles from './Resume.module.css'

export default function Resume({ filename }) {
  const [html, setHtml] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!filename) return

    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js'
    script.onload = () => loadDocx()
    script.onerror = () => setError('Failed to load document renderer.')
    document.head.appendChild(script)

    return () => document.head.removeChild(script)
  }, [filename])

  async function loadDocx() {
    try {
      const res = await fetch(`/${filename}`)
      if (!res.ok) throw new Error(`Could not load ${filename} (${res.status})`)
      const arrayBuffer = await res.arrayBuffer()
      const result = await window.mammoth.convertToHtml({ arrayBuffer })
      setHtml(result.value)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (!filename) return null

  return (
    <section className={styles.section} id="resume">
      <SectionLabel>Résumé</SectionLabel>

      <div className={styles.toolbar}>
        <a
          href={`/${filename}`}
          download
          className={styles.downloadBtn}
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 2v8M5 7l3 3 3-3M2 12v1a1 1 0 001 1h10a1 1 0 001-1v-1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Download .docx
        </a>
      </div>

      <div className={styles.docWrap}>
        {loading && (
          <div className={styles.state}>
            <span className={styles.spinner} />
            Rendering document…
          </div>
        )}

        {error && (
          <div className={styles.stateError}>
            <span>⚠️</span>
            <p>{error}</p>
            <small>Make sure <code>{filename}</code> is in the <code>public/</code> folder.</small>
          </div>
        )}

        {html && (
          <div
            ref={containerRef}
            className={styles.docContent}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </div>
    </section>
  )
}
