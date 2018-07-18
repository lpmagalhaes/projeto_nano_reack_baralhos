import React from 'react'
import {AppRegistry} from 'react-native'
import Principal from './components/Principal'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default class App extends React.Component{
	render(){
		return (
			<Provider store={store}>
				<Principal />
			</Provider>	
		)
	}
}

