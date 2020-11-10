import React from 'react'
import AboutPage from '../pages/AboutPage'
import ArtistPage from '../pages/ArtistPage'
import LoginPage from '../pages/LoginPage'

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <ArtistPage />
        </Route>
      </Switch>

    </BrowserRouter>
  )
}

export default App

