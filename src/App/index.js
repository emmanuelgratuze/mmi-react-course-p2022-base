import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Header from "components/Header";

// Exercices
import FirstComponentExercice from 'exercices/FirstComponent'
import StylingComponentsExercice from 'exercices/StylingComponents'
import ContextsExercice from 'exercices/Contexts'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/first-component">
          <FirstComponentExercice />
        </Route>
        <Route exact path="/styling-components">
          <StylingComponentsExercice />
        </Route>
        <Route exact path="/contexts">
          <ContextsExercice />
        </Route>
        <Route exact path="/hooks">
          Hooks
        </Route>
        <Route exact path="/">
          <FirstComponentExercice />
        </Route>
        <Route exact path="/">
          404
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
