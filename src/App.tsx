import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginForm from './components/login'

import { Navbar } from './components/Navbar'
import { About } from './pages/About'
import { Home } from './pages/Home'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/login" component={LoginForm} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
