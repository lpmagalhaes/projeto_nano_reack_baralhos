import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Picker } from 'react-native';
import {connect} from 'react-redux'
import {adicionarPerguntaAoAsyncStorage} from '../actions'
import {NavigationActions} from 'react-navigation'


class NovaPergunta extends React.Component {
	state = {
		inputPergunta: '',
		inputResposta: null,
		mostrarMensagemDeErro: false,
	}
	submeter = () => {
		const {inputPergunta, inputResposta} = this.state
		if(inputPergunta === '' || inputResposta === '0'){
			this.setState({mostrarMensagemDeErro: true})
		}else{
			const {baralho, perguntas} = this.props
			let pergunta = {}
			pergunta.id = Date.now() + ''
			pergunta.pergunta = inputPergunta 
			pergunta.resposta = (inputResposta == 'true')
			pergunta.posicao = perguntas.length
			pergunta.baralho_id = baralho.id
			this.props.adicionarPerguntaAoAsyncStorage(pergunta)
			this.setState({inputPergunta: '', inputResposta: '', mostrarMensagemDeErro: false})
			this.props.navigation.navigate(
				'DetalheBaralho',
				{baralho_id: baralho.id}
			)
		}
	}
	render() {
		const {inputPergunta, inputResposta, mostrarMensagemDeErro} = this.state
		return (
			<KeyboardAvoidingView behavior='padding'> 
				{mostrarMensagemDeErro &&
				<View>
					<Text>Preencha a pergunta e resposta</Text>
				</View>
				}
				<View>
					<Text>Pergunta</Text>
					<Text>Nova Pergunta</Text>
						<TextInput
						value={inputPergunta}
						onChangeText={(text) => this.setState({inputPergunta: text})}
					/>
					<Text>Resposta</Text>
					<Picker
		  				selectedValue={this.state.inputResposta}
						style={{ height: 50, width: 300 }}
						onValueChange={(itemValue, itemIndex) => this.setState({inputResposta: itemValue})}>
						<Picker.Item label="SELECIONE" value="0" />
						<Picker.Item label="SIM" value="true" />
						<Picker.Item label="NÃO" value="false" />
					</Picker>
				</View>
			<TouchableOpacity onPress={() => this.submeter()}>
				<Text>Submeter</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
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

function mapStateToProps({baralhos, perguntas},{navigation}){
	const baralho_id = navigation.state.params.baralho_id
	return {
		baralho: baralhos && baralhos.find(baralho => baralho.id === baralho_id),
		perguntas: perguntas && perguntas.filter(pergunta => pergunta.baralho_id === baralho_id)
	}
}

function mapDispatchToProps(dispatch){
	return {
		adicionarPerguntaAoAsyncStorage: (data) => dispatch(adicionarPerguntaAoAsyncStorage(data)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NovaPergunta)
