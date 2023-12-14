// import React from 'react'
import React from 'react'
// import ReactDOM from 'react-dom/client'
import ReactDOM from 'react-dom/client'  // VERIFICAR
// import App from './App.jsx'
import App from './App.jsx'
// import './index.css'  // VERIFICAR
// import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
import { Provider } from 'react-redux'
// import store from './redux/store.js'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
