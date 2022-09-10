/*Código Login
FATEC Barueri - Design de Mídias Digitais
Programação para Mobile II
Professora Denise Lemes Fernandes Neves
Luis Carlos Oliveira Santos Junior*/

import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

import logo from './../img/logo.jpg';
import facebook from './../img/facebook.png';
import google from './../img/google.png';

import Cadastro from './Cadastro';

export default class Touchables extends Component {
  _onPressButton() {
    alert('Em construção')
  }

  render() {
    return (
      <View style={styles.container}>

        <Image source={logo} style={styles.logo} />

        <TextInput
          style={styles.textInputLogin}
          placeholder="Login"
          underlineColorAndroid="transparent"
        />

        <TextInput
          secureTextEntry={true}
          password={true}
          style={styles.textInputSenha}
          placeholder="Senha"
          underlineColorAndroid="transparent"
        />

        <View>
          <TouchableOpacity style={styles.linkEsqueci}>
            <Text style={styles.linkText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity 
          style={styles.buttonEntrar}
          onPress={this._onPressButton}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity 
          style={styles.buttonCadastrar}
          onPress={() => {Cadastro}} 
          >
            <Text 
            style={styles.buttonText}
            onPress={Cadastro}>Quero me cadastrar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.TextEntrar}>
          ou entre com
          </Text>

        <View style={{ flex: 1, flexDirection: 'row', alignSelf: "center" }}>
          <Image source={facebook} style={styles.fg} />
          <Image source={google} style={styles.fg} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: '#FFFFFF',
  },

  logo: {
    marginTop: 50,
    marginBottom: 10,
    alignSelf: "center",
    width: 200,
    height: 60,
  },

  textInputLogin: {
    width: 300,
    height: 45,
    marginTop: 50,
    borderWidth: 1,
    borderColor: '#C5DBEA',
    margin: 10,
    fontSize: 15,
    padding: 10,
    backgroundColor: '#C5DBEA',
    borderRadius: 10,
    alignSelf: "center",
  },

  textInputSenha: {
    width: 300,
    height: 45,
    borderWidth: 1,
    borderColor: '#C5DBEA',
    margin: 10,
    fontSize: 15,
    padding: 10,
    backgroundColor: '#C5DBEA',
    borderRadius: 10,
    alignSelf: "center",
  },

  linkEsqueci: {
    marginLeft: 150,
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonEntrar: {
    width: 180,
    marginTop: 40,
    height: 50,
    backgroundColor: '#000000',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "center",
    marginLeft: 6,
    marginRight: 6,
  },

  buttonCadastrar: {
    width: 180,
    marginTop: 10,
    height: 50,
    backgroundColor: '#737373',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "center",
    marginLeft: 6,
    marginRight: 6,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  TextEntrar: {
    fontWeight: 'bold',
    fontSize: 60,
    marginTop: 30,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    fontSize: 25
  },

  fg: {
    margin: 10,
    marginTop: 10,
    width: 50,
    height: 60,
  },

});