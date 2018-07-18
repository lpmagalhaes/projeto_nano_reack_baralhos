import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'

class Baralho extends React.Component {
	render() {
		const {baralho, perguntas} = this.props
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={() => this.props.navegarParaOsDetalhes(baralho.id)}>
					<Text>Baralho</Text>
					<Text>{baralho.nome}</Text>
					<Text>{perguntas.length} cartões</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'green',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

function mapStateToProps({baralhos, perguntas},{baralho_id}){
	return {
		baralho: baralhos && baralhos.find(baralho => baralho.id === baralho_id),
		perguntas: perguntas && perguntas.filter(pergunta => pergunta.baralho_id === baralho_id)
	}
}

export default connect(mapStateToProps, null)(Baralho)
