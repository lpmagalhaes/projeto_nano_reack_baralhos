import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Baralho from './Baralho'
import {connect} from 'react-redux'

class Baralhos extends React.Component {
	render() {
		const {baralhos} = this.props
		return (
			<View> 
				<ScrollView>
					{baralhos.map(baralho => <Baralho baralho_id={baralho.id} key={baralho.id} />)}
				</ScrollView>
			</View>
		);
	}
}

function mapStateToProps({baralhos}){
	return {
		baralhos
	}
}

export default connect(mapStateToProps, null)(Baralhos)
