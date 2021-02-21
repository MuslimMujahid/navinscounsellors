import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import Lawyerpage from './components/Lawyerpage/Lawyerpage'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/lawyer/:link" component={Lawyerpage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
