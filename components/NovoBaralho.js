import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'

class NovoBaralho extends React.Component {
	state = {
		input: ''
	}
	aoMudarValorDoInput = (input) => {this.setState({input})} 
	render() {
		const {input} = this.state
		return (
			<KeyboardAvoidingView behavior='padding'> 
				<View>
					<Text>NovoBaralho</Text>
					<TextInput
						value={input}
						onChange={(event) => this.aoMudarValorDoInput(event.target.value)}
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

function mapDispatchToProps(dispatch){
	return {

	}
}

export default connect(null, mapDispatchToProps)(NovoBaralho)
