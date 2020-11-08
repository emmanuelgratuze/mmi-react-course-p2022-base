import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Header from "components/Header";

// Exercices
import FirstComponentExercice from 'exercices/FirstComponent'
import CompositionAndPropsExercice from 'exercices/CompositionAndProps'
import StylingComponentsExercice from 'exercices/StylingComponents'
import HooksExercice from 'exercices/Hooks'
import RoutingExercice from 'exercices/Routing'
import SpotifyExercice from 'exercices/Spotify'
import ContextsExercice from 'exercices/Contexts'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/first-component">
          <FirstComponentExercice />
        </Route>
        <Route path="/composition-and-props">
          <CompositionAndPropsExercice />
        </Route>
        <Route path="/styling-components">
          <StylingComponentsExercice />
        </Route>
        <Route path="/hooks">
          <HooksExercice />
        </Route>
        <Route path="/routing">
          <RoutingExercice />
        </Route>
        <Route path="/spotify">
          <SpotifyExercice />
        </Route>
        <Route path="/contexts">
          <ContextsExercice />
        </Route>
        <Route path="/">
          <FirstComponentExercice />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
