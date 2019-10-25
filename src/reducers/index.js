import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { connectRouter } from 'connected-react-router'

import authReducer from './authReducer'
import streamReducer from './streamReducer'

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    form: formReducer,
    streams: streamReducer,
  })

export default createRootReducer
