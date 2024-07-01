import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Auth from './components/Context/Auth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   
   <BrowserRouter>
  <Auth>
  <div className="dark:bg-slate-800 dark:text-white">
    <App />
   </div>
  </Auth>
 </BrowserRouter>
  
)
