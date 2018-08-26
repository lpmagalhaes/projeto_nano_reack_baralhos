import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import {limparNotificacaoLocal, setarNotificacaoLocal} from '../helpers/helper'

class Quiz extends React.Component {
	state = {
		perguntaAtual: null,
		mostrarResposta: false,
		mostrarResultado: false,
		respostaCertas: 0,
	}
	componentDidMount(){
		const {perguntas} = this.props
		this.setState({perguntaAtual: perguntas[0]})
	}
	mostrarResposta(resposta){
		const {perguntaAtual} = this.state
		let {respostaCertas} = this.state
		if(perguntaAtual.resposta === resposta){
			respostaCertas++
		}
		this.setState({mostrarResposta: true, respostaCertas: respostaCertas})
	}
	esconderResposta(){
		this.setState({mostrarResposta: false})
	}
	proximaPergunta(){
		const {perguntaAtual} = this.state
		const {perguntas} = this.props
		let indice = parseInt(perguntaAtual.posicao) + 1
		this.setState({perguntaAtual: perguntas[indice]})
		this.esconderResposta()
	}
	mostrarResultado(){
		this.setState({mostrarResultado: true})
		limparNotificacaoLocal()
		.then(setarNotificacaoLocal())
	}
	navegarParaPrincipal(){
		this.props.navigation.navigate(
			'Principal',
	)}

	render() {
		const {perguntas} = this.props
		let {perguntaAtual} = this.state
		const {mostrarResposta, mostrarResultado, respostaCertas} = this.state
		return (
			<View style={styles.container}>
				<Text>Quiz</Text>
				{perguntaAtual &&
				<View>
					<Text>{perguntaAtual.posicao + 1}/{perguntas.length}</Text>
					{mostrarResultado === false &&
					<View>
						<Text>{perguntaAtual.pergunta}</Text>
						<TouchableOpacity onPress={() => this.mostrarResposta(true)}>
							<Text>Sim</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => this.mostrarResposta(false)}>
							<Text>Não</Text>
						</TouchableOpacity>
						{mostrarResposta && 
							<View>
								<Text>Resposta</Text>
								{perguntaAtual.resposta &&
								<Text>SIM</Text>
								}
								{perguntaAtual.resposta === false &&
								<Text>NÃO</Text>
								}
								{(perguntaAtual.posicao+1) < perguntas.length &&
								<TouchableOpacity onPress={() => this.proximaPergunta()}>
									<Text>Proxima Pergunta</Text>
								</TouchableOpacity>
								}
								{(perguntaAtual.posicao+1) == perguntas.length &&
								<TouchableOpacity onPress={() => this.mostrarResultado()}>
									<Text>Finalizar</Text>
								</TouchableOpacity>
								}
							</View>
						}
					</View>
					}
					{mostrarResultado && 
					<View>
						<Text>Resultado: {respostaCertas}</Text>
						<TouchableOpacity onPress={() => this.navegarParaPrincipal()}>
							<Text>Voltar para os baralhos</Text>
						</TouchableOpacity>
					</View>
					}	
				</View>
				}
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

function mapStateToProps({perguntas},{navigation}){
	const baralho_id = navigation.state.params.baralho_id
	return {
		perguntas: perguntas && perguntas.filter(pergunta => pergunta.baralho_id === baralho_id)
	}
}

export default connect(mapStateToProps, null)(Quiz)
