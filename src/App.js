import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import Lawyerpage from './components/Lawyerpage/Lawyerpage'
import PracticeAreapage from './components/PracticeAreaapge/PracticeAreapage'
import ContactUspage from './components/ContactUspage/ContactUspage'
import { linkStateContext } from './components/Context/linkStateContext'

function App() {

  const [linkState, setLinkState] = useState({
    home: '',
    about: '',
    practiceArea: '',
    lawyer: '',
    publications: '',
    contactUs: '',
  })

  return (
    <div className="App">
      <Router>
        <linkStateContext.Provider value={{state: linkState, set: setLinkState}}>
          <Header />
          <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/lawyer/:link" component={Lawyerpage} />
            <Route path="/practice-area/:link" component={PracticeAreapage} />
            <Route path="/contact-us" component={ContactUspage} />
          </Switch>
        </linkStateContext.Provider>
      </Router>
    </div>
  );
}

export default App;
