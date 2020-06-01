import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { applyMiddleware } from 'redux'
import budgetReducer from './budgetReducer'
import promiseMiddleware from 'redux-promise-middleware'
import reducer from './userReducer'

const rootReducer = combineReducers({
    budget: budgetReducer,
    user: reducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))