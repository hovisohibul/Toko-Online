import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'
import './assets/css/style.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Provider } from 'react-redux'
import store from './manage/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
