import "./App.css";
// @ts-ignore
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Archive from './components/Archive/Archive';
import { getWords } from "./request_handler/ServerRequest";

function App() {
  // Send request to server to get words
  getWords();

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/archive'>
            <Archive />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;