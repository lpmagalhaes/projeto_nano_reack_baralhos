import React from 'react'
import { StyleSheet, Text, View, Platform, StatusBar} from 'react-native'
import Baralhos from './Baralhos'
import NovoBaralho from './NovoBaralho'
import {createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation'
import {white, purple, black} from '../helpers/colors'
import {Constants} from 'expo' 
import DetalheBaralho from './DetalheBaralho'
import Quiz from './Quiz'
import NovaPergunta from './NovaPergunta'
import {connect} from 'react-redux'
import {pegarBaralhosNoAsyncStorage, pegarPerguntasNoAsyncStorage} from '../actions'

class Principal extends React.Component {
	componentDidMount(){
		this.props.pegarBaralhosNoAsyncStorage()
		this.props.pegarPerguntasNoAsyncStorage()
	}
	render() {
		return (
			<View style={{flex: 1}}>
				<BarraDeEstado backgroundColor={purple} barStyle='light-content' />
				<NavegacaoPrincipal />
			</View>
		);
	}
}

function BarraDeEstado ({backgroundColor, ...props}){
	return (
		<View style={{backgroundColor, height: Constants.statusBarHeight}}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props}/>
		</View>
	)
}
const Tabs = createMaterialTopTabNavigator({
	Baralhos:{
		screen: Baralhos,
		navigationOptions:{
			tabBarLabel: 'Baralhos',			
		},
	},
	NovoBaralho:{
		screen: NovoBaralho,
		navigationOptions:{
			tabBarLabel: 'Novo Baralho',
		},
	},
}, {
	tabBarOptions:{
		activeTintColor: Platform.OS === 'ios' ? purple : white,
		style:{
			height: 56,
			backgroundColor: Platform.OS === 'ios' ? white : purple,
			shadowColor: 'rgba(0,0,0,0.24)',
			shadowOffset: {
				width: 0,
				height: 3,
			},
			shadowRadius: 6,
			shadowOpacity: 1,
		}
	}
})

const NavegacaoPrincipal = createStackNavigator({
	Principal: {
		screen:Tabs,
		navigationOptions:{
			header: null,
		}
	},
	DetalheBaralho: {
		screen: DetalheBaralho,
		navigationOptions:{
			headerTintColor: white,
			headerStyle:{
				backgroundColor: purple,
			}
		}
	},
	Quiz:{
		screen: Quiz,
		navigationOptions:{
			headerTintColor: white,
			headerStyle:{
				backgroundColor: purple
			}
		}
	},
	NovaPergunta:{
		screen: NovaPergunta,
		navigationOptions:{
			headerTintColor: white,
			headerStyle:{
				backgroundColor: purple
			}
		}
	}
}, {
	
})


function mapDispatchToProps(dispatch){
	return {
		pegarBaralhosNoAsyncStorage: () => dispatch(pegarBaralhosNoAsyncStorage()),
		pegarPerguntasNoAsyncStorage: () => dispatch(pegarPerguntasNoAsyncStorage()),
	}
}

export default connect(null, mapDispatchToProps)(Principal)
