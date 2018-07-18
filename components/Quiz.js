import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'

class Quiz extends React.Component {
	state = {
		perguntaAtual: null,
	}
	render() {
		const {perguntas} = this.props
		const {perguntaAtual} = this.state
		return (
			<View style={styles.container}>
				<Text>Quiz</Text>
				<Text>{perguntaAtual}/{perguntas.length}</Text>
				{perguntas.map(pergunta => {
					pergunta.id === perguntaAtual &&
						<View>
							<Text>{pergunta.pergunta}</Text>
							<TouchableOpacity onPress={() => console.log('Sim')}>
								<Text>Sim</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => console.log('Não')}>
								<Text>Não</Text>
							</TouchableOpacity>
						</View>
					})}
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

function mapStateToProps({perguntas},{baralho_id}){
	return {
		perguntas: perguntas && perguntas.filter(pergunta => pergunta.baralho_id === baralho_id)
	}
}

export default connect(mapStateToProps, null)(Quiz)
