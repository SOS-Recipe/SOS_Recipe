import logo from './logo.svg';
import Landing from './components/landing';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './components/about';
import AxiosTest from './components/axiosTesting';

function App() {
  return (
  <>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      <div className="App">
        < AxiosTest/>
      </div>
  </>
  );
}

export default App;
