import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Portal, Login, SignUp } from './page'
import { Header } from './component'

class App extends Component {
  state = {
    isLogged: false,
    email: ''
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={Portal} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/auth/new' component={SignUp} />
      </BrowserRouter>
    )
  }
}

export default App
