import './App.css';
import './styles/app.scss';
import Header from './components/Header';
import {Switch, Route} from "react-router-dom";
import Home from './components/Home';
import Lp from './components/landingPage';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/" component={Lp}></Route>
        </Switch>
    </div>
  );
}

export default App;
