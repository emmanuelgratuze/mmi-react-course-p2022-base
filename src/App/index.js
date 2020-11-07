import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Menu from "../components/Menu";

// Exercices
import FirstComponentExercice from '../exercices/first-component';
import CompositionAndPropsExercice from '../exercices/composition-and-props';
import StylingComponentsExercice from '../exercices/styling-components';
import HooksExercice from '../exercices/hooks';
import RoutingExercice from '../exercices/routing';

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
