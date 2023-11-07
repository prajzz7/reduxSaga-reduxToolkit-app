import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import { Provider } from 'react-redux'
import { catSlice } from './catState.jsx'
import catSaga from './catSaga.jsx'


const saga = createSagaMiddleware()
const store = configureStore({
  reducer: {
    cats: catSlice.reducer
  },
  middleware: [saga]
})

saga.run(catSaga)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
