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
			monto:0,
			text:''
		};
		this.hacerPlazoFijo = this.hacerPlazoFijo.bind(this);
		this.buscarInteres = this.buscarInteres.bind(this);
	}

	hacerPlazoFijo(){
		
		var interes = this.state.monto * (Math.pow(1+this.buscarInteres()/100,this.state.dias/360)-1);

		this.setState({capitalFinal:this.state.monto+interes});

		ToastAndroid.show('Plazo fijo realizado',
		ToastAndroid.LONG);

	}

	buscarInteres(){

		if(this.state.monto>0 && this.state.monto<=5000)
		{
			if(this.state.dias < 30){
				return 25;
			}else{
				return 27.5;
			}
			
		}else{
			if(this.state.monto>5000 && this.state.monto<=99999){
				if(this.state.dias < 30){
					return 30;
				}else{
					return 32.3;
				}
			}else{
				if(this.state.monto>99999){
					if(this.state.dias < 30){
						return 35;
					}else{
						return 38.5;
					}
				}
			}
		}

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
				value1 = {this.state.monto}>
				</TextInput>
				<Text>
					Dias
				</Text>
				<Slider 
				minimumValue={1}
				maximumValue={30}
				style={{ width: 300 }}
				step={1}
				value2 ={this.state.dias}
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
				      value3 ={this.state.checked}
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
					El monto final será de ${this.state.capitalFinal}.
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