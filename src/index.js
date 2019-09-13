import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import DB from './lib/db'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
