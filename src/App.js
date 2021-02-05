import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Homepage} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
