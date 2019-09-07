import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Portal, Login } from './page'
import { Header } from './component'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={Portal} />
        <Route exact path='/login' component={Login} />
      </BrowserRouter>
    )
  }
}

export default App
