import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Switch  } from "react-router-dom";
import { Suspense } from 'react';
import FunctionComposant, { Cp2 } from './Composants/FunctionComposant';
import ClassComposant from './Composants/ClassComposant';
import Hooks from './LifeCyle/Hooks';

function App() {
  // Ajouter les composants que vous voulez pour faire le test
  
  return (
    <div className="App">
      <header className="App-header">
    <BrowserRouter basename="/">
          <Switch>

          <Route
              path="/FunctionComposant"
              exact
              render={() => <FunctionComposant name="hello" />}
            ></Route>
            <Route
              path="/ClassComposant"
              render={(props) => <ClassComposant {...props}/>}
            ></Route>
            
            <Route exact render={() => <p>Page not found!</p>}></Route>
          </Switch>
        
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
