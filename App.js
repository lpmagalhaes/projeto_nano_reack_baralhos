import React from 'react'
import {AppRegistry} from 'react-native'
import Principal from './components/Principal'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const logger = store => next => action => { 
	console.group(action.type)
	console.info('despachando', action)
	let resultado = next(action)
	console.log('proximo', store.getState())
	console.groupEnd(action.type)
	return resultado
}

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default class App extends React.Component{
	render(){
		return (
			<Provider store={store}>
				<Principal />
			</Provider>	
		)
	}
}

