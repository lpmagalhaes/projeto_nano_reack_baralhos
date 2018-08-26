import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import {adicionarBaralhoAoAsyncStorage} from '../actions'
import {NavigationActions} from 'react-navigation'

class NovoBaralho extends React.Component {
	state = {
		input: '',
		mostrarMensagemDeErro: false,
	}
	submeter = () => {
		const {input} = this.state
		if(input === ''){
			this.setState({mostrarMensagemDeErro: true})
		}else{
			let baralho = {}
			baralho.id = Date.now() + ''
			baralho.nome = input
			this.props.adicionarBaralhoAoAsyncStorage(baralho)
			this.setState({input: '', mostrarMensagemDeErro: false})
			this.props.navigation.dispatch(NavigationActions.back({key: 'NovoBaralho'}))
		}
	}
	render() {
		const {input, mostrarMensagemDeErro} = this.state
		return (
			<KeyboardAvoidingView behavior='padding'> 
				{mostrarMensagemDeErro &&
				<View>
					<Text>Preencha o nome do baralho</Text>
				</View>
				}
				<View>
					<Text>NovoBaralho</Text>
					<TextInput
						value={input}
						onChangeText={(text) => this.setState({input: text})}
					/>
				</View>
				<TouchableOpacity onPress={() => this.submeter()}>
					<Text>Submeter</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		);
	}
}

function mapDispatchToProps(dispatch){
	return {
		adicionarBaralhoAoAsyncStorage: (data) => dispatch(adicionarBaralhoAoAsyncStorage(data)),
	}
}

export default connect(null, mapDispatchToProps)(NovoBaralho)
