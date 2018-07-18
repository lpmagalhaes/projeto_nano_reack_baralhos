import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'

class NovoBaralho extends React.Component {
	state = {
		inputNome: ''
	}
	render() {
		const {inputNome} = this.state
		return (
			<View>
				<KeyboardAvoidingView behavior='padding'> 
					<Text>NovoBaralho</Text>
					<TextInput
						value={inputNome}
						onChangeValue={(input) => this.setState({inputNome: input})}
					/>
				</KeyboardAvoidingView>
			<TouchableOpacity onPress={() => console.log('Submeter')}>
				<Text>Submeter</Text>
			</TouchableOpacity>
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

function mapDispatchToProps(dispatch){
	return {

	}
}

export default connect(null, mapDispatchToProps)(NovoBaralho)
