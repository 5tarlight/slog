import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Portal } from './page'

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Portal} />
    </BrowserRouter>
  );
}

export default App;
