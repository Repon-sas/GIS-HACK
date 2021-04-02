import React from 'react'
import MainPageYoung from './pages/MainPageYoung/mainPageYong'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from './pages/HomePage/index'
import Faq from './pages/Faq/faq'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/maps" component={MainPageYoung} />
        <Route path="/faq" component={Faq} />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </Router>
  );
}

export default App;
