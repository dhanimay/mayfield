import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from 'views/components/app.jsx'
require('sass/index.sass')

ReactDOM.hydrate(
  <BrowserRouter>
    <App data={''}/>
  </BrowserRouter>
  , document.getElementById('app'))
