import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Interests from './components/Interests.jsx'
import Contact from './components/Contact.jsx'
import Resume from './components/Resume.jsx'
import styles from './App.module.css'

export default function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/portfolio.json')
      .then(r => {
        if (!r.ok) throw new Error(`Could not load portfolio.json (${r.status})`)
        return r.json()
      })
      .then(json => {
        setData(json)
        if (json.name) document.title = `${json.name} — Portfolio`
      })
      .catch(err => setError(err.message))
  }, [])

  // Once data is rendered, scroll to the hash section if present
  useEffect(() => {
    if (!data) return
    const hash = window.location.hash?.slice(1)
    if (!hash) return

    // Use requestAnimationFrame to wait for the DOM to fully paint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const el = document.getElementById(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    })
  }, [data])

  if (error) return (
    <div className={styles.errorState}>
      <span>⚠️</span>
      <p>{error}</p>
      <small>Make sure <code>portfolio.ai</code> is in the <code>public/</code> folder.</small>
    </div>
  )

  if (!data) return (
    <div className={styles.loadingState}>Loading…</div>
  )

  return (
    <div className={styles.layout}>
      <Sidebar data={data} />
      <main className={styles.main}>
        <About bio={data.bio} />
        {data.experience?.length > 0 && <Experience items={data.experience} />}
        {data.projects?.length > 0 && <Projects items={data.projects} />}
        {data.interests?.length > 0 && <Interests items={data.interests} />}
        {data.contact && <Contact contact={data.contact} />}
        {data.resume && <Resume filename={data.resume} />}
        <footer className={styles.footer}>
          <span>© {new Date().getFullYear()} {data.name}</span>
          <span>Powered by portfolio.json</span>
        </footer>
      </main>
    </div>
  )
}