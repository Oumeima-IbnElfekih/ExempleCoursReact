import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import compteurReducer from './ExempleRedux/reducer'

//creation du store 
let store = createStore(compteurReducer,
 // window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  );
// console.log(store);
// store.subscribe(()=> console.log(store.getState()))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> <App /> </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);
// you can add exetension 
//window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
