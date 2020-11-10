import React from 'react'
import Input from '../../components/Input'
import Page from '../../components/Page'

import styles from './LoginPage.module.css'

/*
styles.title
*/

const LoginPage = () => {
  return (
    <Page>
      <div className="login-page">
        <form>
          <h1 className={styles.title}>Page de login !</h1>
          <br />

          Email
          <Input type="email" />

          <br />
          <br />
          Password
          <Input
            type="password"
          />
        </form>
      </div>
    </Page>
  )
}

export default LoginPage
