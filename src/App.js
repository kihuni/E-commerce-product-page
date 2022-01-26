import React from 'react'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainSection from './MainSection'

const App = () => {
  return (
    <div>
      <Router>
      <Header />
       <Switch>
         <Route path='/' />
       </Switch>
      </Router>
        <MainSection />
    </div>
  )
}

export default App
