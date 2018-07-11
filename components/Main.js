import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {connect} from 'react-redux'

class Main extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>{console.log(this.props)}</Text>
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

function mapStateToProps({baralhos, perguntas}){
	return {
		baralhos,
		perguntas,
	}
}

export default connect(mapStateToProps, null)(Main)
