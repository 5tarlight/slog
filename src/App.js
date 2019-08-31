import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Portal } from './page'
import { Header } from './component'

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/' component={Portal} />
    </BrowserRouter>
  )
}

export default App
