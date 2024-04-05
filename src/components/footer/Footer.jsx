import React from 'react'
import styles from './footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container}>
          <div className={styles.logo}>AIPILOT</div>
          <div className={styles.text}>Copyright © 2023-2024 AIPilot Software, Inc.</div>
    </div>
  )
}

export default Footer
