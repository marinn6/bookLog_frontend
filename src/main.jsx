import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//We import Browser Router like shown below:
import { BrowserRouter as Router } from 'react-router-dom'

//then create the <Router></Router> tag and put <App /> inside of it 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
