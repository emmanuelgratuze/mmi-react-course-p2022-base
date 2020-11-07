import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Menu from "../components/Menu";

// Exercices
import FirstComponentExercice from '../exercices/FirstComponent'
import CompositionAndPropsExercice from '../exercices/CompositionAndProps'
import StylingComponentsExercice from '../exercices/StylingComponents'
import HooksExercice from '../exercices/Hooks'
import RoutingExercice from '../exercices/Routing'

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/">
          <FirstComponentExercice />
        </Route>
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
