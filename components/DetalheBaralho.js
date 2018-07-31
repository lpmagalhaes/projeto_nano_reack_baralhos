import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'

class DetalheBaralho extends React.Component {
	navegarParaOQuiz(id){
		this.props.navigation.navigate(
			'Quiz',
			{baralho_id: id}
		)}
	navegarParaNovaPegunta(id){
		this.props.navigation.navigate(
			'NovaPergunta',
			{baralho_id: id}
		)}
	
	render() {
		const {baralho, perguntas} = this.props
		return (
			<View style={styles.container}>
				<Text>Detalhe Baralho</Text>
				<Text>{baralho.nome}</Text>
				<Text>{perguntas.length} cartões</Text>
				<TouchableOpacity onPress={() => this.navegarParaNovaPegunta(baralho.id)}>
					<Text>Adicionar carta</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.navegarParaOQuiz(baralho.id)}>
					<Text>Começar Quiz</Text>
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

function mapStateToProps({baralhos, perguntas}, {navigation}){
	return {
		baralho: baralhos && baralhos.find(baralho => baralho.id === navigation.state.params.baralho_id),
		perguntas: perguntas && perguntas.filter(pergunta => pergunta.baralho_id === navigation.state.params.baralho_id)
	}
}

export default connect(mapStateToProps, null)(DetalheBaralho)
