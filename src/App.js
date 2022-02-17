import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import FunctionComposant, { Cp2 } from './Composants/FunctionComposant';
import ClassComposant from './Composants/ClassComposant';
import useWindowWidth from './Customhook/useWindowWidth';
import useIsOnline from './Customhook/useIsOnline';
function Home (){
  return <h1>Home</h1>
}
function About (){
  const {width,height} = useWindowWidth();
  return (<>
      <h1>{width}</h1>
      <h1>{height}</h1>

  </>
  )
}
function Contact (){
  const isOnline = useIsOnline();

  return <h1>Online: {""+isOnline+""}</h1>
}
function App() {
  // Ajouter les composants que vous voulez pour faire le test
  

  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Switch>
      <Route exact  path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
     

      </Switch>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
