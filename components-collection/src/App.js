import './App.css';
import { BrowserRouter as Router, Switch,  Route } from "react-router-dom";
import  Breakpoint from './components/breakpoints/Breakpoint';
import  Major from './components/major/Major';
import JustifyContent from './components/spacing/JustifyContent';

function App()  {
  return (
       <Router>
        <Switch>
          <Route exact path='/' component={ Major }/>
          <Route  path='/breakpoint' component={ Breakpoint} />
          <Route  path='/spacing' component={ JustifyContent } />
        </Switch>
       </Router>
       

     
  

    
  );
}

export default App;
