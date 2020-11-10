import React from 'react'
import Page from '../../components/Page'

import styles from './Artist.module.css'

const ArtistPage = () => {
  return (
    <Page>
      <div class={styles.page}>
        <h1 className={styles.title}>Artist Page</h1>
      </div>
    </Page>
  )
}

export default ArtistPage
