import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; 
import App from './app';
import { applyMiddleware, createStore} from 'redux'
import reducers from './reducers';
import reduxThunk from 'redux-thunk';



ReactDOM.render(<Provider store={createStore(reducers,applyMiddleware(reduxThunk))} ><App/></Provider>,document.querySelector('#root'));

 
