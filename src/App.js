import React from 'react'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Router>
      <Header />
       <Switch>
         <Route path='/' />
       </Switch>
      </Router>

    </div>
  )
}

export default App
