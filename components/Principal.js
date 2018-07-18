import React from 'react'
import { StyleSheet, Text, View, Platform, StatusBar} from 'react-native'
import Baralhos from './Baralhos'
import NovoBaralho from './NovoBaralho'
import {createMaterialTopTabNavigator, StackNavigator} from 'react-navigation'
import {white, purple} from '../helpers/colors'
import {Constants} from 'expo' 
import DetalheBaralho from './DetalheBaralho'

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

const NavegacaoPrincipal = StackNavigator({
	Principal: {
		screen:Tabs,
	},
	DetalheBaralho: {
		screen: DetalheBaralho,
		navigationOptions:{
			headerTintColor: white,
			headerStyle:{
				backgroundColor: purple,
			}
		}
	}
}, {
	
})

class Principal extends React.Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<BarraDeEstado backgroundColor={purple} barStyle='light-content' />
				<NavegacaoPrincipal />
			</View>
		);
	}
}

export default Principal
