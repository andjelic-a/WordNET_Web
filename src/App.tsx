import "./App.css";
// @ts-ignore
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Archive from './components/Archive/Archive';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/credits'>
            <Archive />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;