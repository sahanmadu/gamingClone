
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Arena from './components/Arena';

function App() {
  return (
    <Router>
    <div className="App">
      
     <Navbar/>
     
    <Switch>
     <Route path="/" component={Home} exact/>
     <Route path="/arena" component={Arena} />
    </Switch>
     <Footer/>

     

    </div>
    </Router>
  );
}

export default App;
