import Landing from './components/landing';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './components/about';
import { Redirect, Route, Router, Switch} from "react-router-dom";
import history from "./history";
import Recipe from './components/recipe';
import AxiosTest from './components/axiosTesting';
import Search from './components/search'

function App() {
  return (
  <>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      <div className="App">
        <Header/>
        <Router history={history}>
          <Switch>
           <Route component={Landing} exact={true} path="/" />
           <Route component={About} exact={true} path ="/About"/>
           <Route component={Recipe} exact={true} path="/Recipe"/>
           <Route component={Search} exact={true} path="/Search"/>
           <Route component={AxiosTest} exact={true} path="/test"/>
          </Switch>
        </Router>
      </div>
  </>
  );
}

export default App;
