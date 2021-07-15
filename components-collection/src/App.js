import './App.css';
import { BrowserRouter as Router, Switch,  Route } from "react-router-dom";
import  Breakpoint from './components/breakpoints/Breakpoint';
import  Major from './components/major/Major';

function App()  {
  return (
       <Router>
        <Switch>
          <Route exact path='/' component={ Major }/>
          <Route  path='/breakpoint' component={ Breakpoint} />
        </Switch>
       </Router>
       

     
  

    
  );
}

export default App;
