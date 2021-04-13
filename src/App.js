import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss';

import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import Aboutpage from './components/Aboutpage/Aboutpage'
import Lawyerpage from './components/Lawyerpage/Lawyerpage'
import LawyerPage_ from './components/LawyerPage_/LawyerPage'
import PracticeAreapage from './components/PracticeAreapage/PracticeAreapage'
import PracticeAreaPage_ from './components/PracticeAreaPage_/PracticeAreaPage'
import ContactUspage from './components/ContactUspage/ContactUspage'
import { linkStateContext } from './components/Context/linkStateContext'
import { languageContext } from './components/Context/languageContext'
import { mobileMenuContext } from './components/Context/mobileMenuContext'
import { layerContext } from './components/Context/layerContext'
import { useSpring } from 'react-spring'

function App() {

  const [linkState, setLinkState] = useState({
    home: '',
    about: '',
    practiceArea: '',
    lawyer: '',
    publications: '',
    contactUs: '',
  })

  const [lang, setLang] = useState('en')
  const [{y}, set] = useSpring(() => ({y: -150}))
  const [layer, setLayer] = useState(false)

  return (
    <div className="App">
      <Router>
        <layerContext.Provider value={{layer: layer, setLayer: setLayer}}>
          <mobileMenuContext.Provider value={{y: y, setMobileMenu: set}}>
            <languageContext.Provider value={{lang: lang, setLang: setLang}}>
              <linkStateContext.Provider value={{state: linkState, set: setLinkState}}>
                <Header />
                <Switch>
                  <Route path="/" component={Homepage} exact />
                  <Route path="/our-legal-team" component={LawyerPage_} exact />
                  <Route path="/practice-area" component={PracticeAreaPage_} exact />
                  <Route path="/our-legal-team/:link" component={Lawyerpage} />
                  <Route path="/practice-area/:link" component={PracticeAreapage} />
                  <Route path="/contact-us" component={ContactUspage} />
                  <Route path="/about" component={Aboutpage} />
                </Switch>
              </linkStateContext.Provider>
            </languageContext.Provider>
          </mobileMenuContext.Provider>
        </layerContext.Provider>
      </Router>
    </div>
  );
}

export default App;
