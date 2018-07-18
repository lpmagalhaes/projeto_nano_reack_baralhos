import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Baralho from './Baralho'
import {connect} from 'react-redux'

class Baralhos extends React.Component {
	render() {
		const {baralhos} = this.props
		return (
			<View style={styles.container}>
				<Text>Baralhos</Text>
				<View>
					{baralhos.map(baralho => <Baralho baralho_id={baralho.id} key={baralho.id} />)}
			</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

function mapStateToProps({baralhos}){
	return {
		baralhos
	}
}

export default connect(mapStateToProps, null)(Baralhos)
