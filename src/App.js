import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Portal } from './page'
import { Header, Footer } from './component'
import styled from 'styled-components'

const Body = styled.div`
  height: 100%;
  width: 100%;
`

function App () {
  return (
    <BrowserRouter>
      <Header />

      <Body>
        <Route exact path='/' component={Portal} />
      </Body>

      <Footer />
    </BrowserRouter>
  )
}

export default App
