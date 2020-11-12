import React from 'react'
import Page from '../../components/Page'
import Text from '../../components/Text2'

import styles from './Artist.module.css'

const ArtistPage = () => {
  return (
    <Page>
      <div className={styles.page}>
        <h1 className={styles.title}>Artist Page</h1>

        <br />
        <br />
        <br />
        <Text>
          Contenu de la page
        </Text>

        <br />
        <br />

        <Text size="small">
          Petit contenu de la page
        </Text>

        <Text size="xlarge">
          Très grand contenu dans la page
        </Text>

        <br />
        <br />
        <br />

      </div>
    </Page>
  )
}

export default ArtistPage
