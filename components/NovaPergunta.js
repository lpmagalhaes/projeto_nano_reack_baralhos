import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput } from 'react-native';

export default class Baralhos extends React.Component {
	state = {
		inputPergunta: '',
		inputResposta: '',
	}
	aoMudarValorDoInputPergunta = (input) => {this.setState({inputPergunta: input})} 
	aoMudarValorDoInputResposta = (input) => {this.setState({inputResposta: input})} 
	render() {
		const {inputPergunta, inputResposta} = this.state
		return (
			<KeyboardAvoidingView behavior='padding'> 
				<View>
					<Text>Pergunta</Text>
					<Text>Nova Pergunta</Text>
						<TextInput
						value={inputPergunta}
						onChange={(event) => this.aoMudarValorDoInputPergunta(event.target.value)}
					/>
					<Text>Resposta</Text>
					<TextInput
						value={inputResposta}
						onChange={(event) => this.aoMudarValorDoInputResposta(event.target.value)}
					/>
				</View>
			<TouchableOpacity onPress={() => console.log('Submeter')}>
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
