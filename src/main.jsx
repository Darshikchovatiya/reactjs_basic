import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Info from './Info.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Info />
    <App />
  </React.StrictMode>,
)
