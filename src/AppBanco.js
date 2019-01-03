import React, {Component} from 'react';
import {ToastAndroid,Button, StyleSheet, Text, TextInput, Picker, View,
Switch, CheckBox, Slider} from 'react-native';
export default class AppBanco extends Component {
	constructor(props) {
		super(props);
		this.state = {
			moneda:1,
			capitalInicial:0,
			capitalFinal:0,
			dias:1,
			monto:0
		};
		this.hacerPlazoFijo = this.hacerPlazoFijo.bind(this);
	}
	hacerPlazoFijo(){
		ToastAndroid.show('Presiono el boton de hacer plazo fijo!',
		ToastAndroid.LONG);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>
					Correo Electronico
				</Text>
				<TextInput
				keyboardType='email-address'>
					correo@gmail.com
				</TextInput>
				<Text>
					CUIT
				</Text>
				<TextInput 
				keyboardType='numeric'>
					00-00000000-0
				</TextInput>
				<Text>
					Moneda
				</Text>
				<Picker
				style={{width: 200}}
				selectedValue={this.state.moneda}
				onValueChange={(valor) => this.setState({moneda:valor})}>
					<Picker.Item label="Dolar" value="1" />
					<Picker.Item label="Pesos ARS" value="2" />
				</Picker>
				<Text>
					Monto
				</Text>
				<TextInput
				keyboardType='numeric'
				onChangeText={(text) => this.setState({ monto: text})}
				value = {this.state.monto}>
					0
				</TextInput>
				<Text>
					Dias
				</Text>
				<Slider 
				minimumValue={1}
				maximumValue={30}
				style={{ width: 300 }}
				step={1}
				value={this.state.dias}
				onSlidingComplete={val => this.setState({ dias: val })}>

				</Slider>
				<Text>
					{this.state.dias} dias
				</Text>
				<Text>
					Avisar por mail
				</Text>
				<Switch>

				</Switch>
				<View style={{ flexDirection: 'row' }}>
				    <CheckBox
				      value={this.state.checked}
				      onValueChange={() => this.setState({ checked: !this.state.checked })}
				    />
				    <Text style={{marginTop: 5}}> 
				    	Acepto términos y condiciones
				    </Text>
			  	</View>
				<Button title="Hacer Plazo Fijo"
				color="#FF0000"
				onPress={this.hacerPlazoFijo}>
					
				</Button>
				<Text>
					El plazo fijo con un monto de ${this.state.monto} por el plazo de {this.state.dias} días se realizó exitosamente.
				</Text>
				<Text>
					Obtendrá una ganancia de ${this.state.capitalFinal}.
				</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});