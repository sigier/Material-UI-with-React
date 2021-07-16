import './App.css';
import { BrowserRouter as Router, Switch,  Route } from "react-router-dom";
import  Breakpoint from './components/breakpoints/Breakpoint';
import  Major from './components/major/Major';
import JustifyContent from './components/spacing/JustifyContent';
import FixedPosition from './components/fixed-position/FixedPosition';
import ScrollHideAppBar from './components/scroll-hide/ScrollHideAppBar';

function App()  {
  return (
       <Router>
        <Switch>
          <Route exact path='/' component={ Major }/>
          <Route  path='/breakpoint' component={ Breakpoint} />
          <Route  path='/spacing' component={ JustifyContent } />
          <Route  path='/fixed' component={ FixedPosition } />
          <Route  path='/scroll' component={ ScrollHideAppBar } />
        </Switch>
       </Router>
       

     
  

    
  );
}

export default App;
