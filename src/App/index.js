import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Menu from "../components/Menu";

// Exercices
import FirstComponentExercice from '../exercices/FirstComponentExercice'
import CompositionAndPropsExercice from '../exercices/CompositionAndPropsExercice'
import StylingComponentsExercice from '../exercices/StylingComponentsExercice'
import HooksExercice from '../exercices/HooksExercice'
import RoutingExercice from '../exercices/RoutingExercice'

function App() {
  return (
    <BrowserRouter>
      <Menu />
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
