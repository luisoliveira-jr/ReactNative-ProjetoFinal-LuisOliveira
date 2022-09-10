/*Código Login
FATEC Barueri - Design de Mídias Digitais
Programação para Mobile II
Professora Denise Lemes Fernandes Neves
Luis Carlos Oliveira Santos Junior*/

import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

import logo from './../img/logo.jpg';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>

        <Image source={logo} style={styles.logo} />

        <Text style={styles.titulo}>
          Cadastro
        </Text>

        <TextInput
          style={styles.textInputText}
          placeholder="Nome completo"
          underlineColorAndroid="transparent"
        />

        <TextInput
          style={styles.textInputText}
          placeholder="Gênero"
          underlineColorAndroid="transparent"
        />

        <TextInput
          style={styles.textInputText}
          placeholder="Data de nascimento"
          underlineColorAndroid="transparent"
        />

        <TextInput
          style={styles.textInputText}
          placeholder="Celular"
          underlineColorAndroid="transparent"
        />

        <TextInput
          style={styles.textInputText}
          placeholder="E-mail"
          underlineColorAndroid="transparent"
        />

        <TextInput
          style={styles.textInputText}
          placeholder="Senha"
          underlineColorAndroid="transparent"
        />

        <Text style={styles.linkTermos}>
          Ao se cadastrar, você concorda com os <b>termos de uso e políticas de privacidade</b>.
          </Text>

        <View>
          <TouchableOpacity style={styles.buttonCadastrar}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
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

  titulo: {
    fontWeight: 'bold',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 6,
    marginRight: 6,
  },

  textInputText: {
    width: 300,
    height: 45,
    borderWidth: 1,
    borderColor: '#C5DBEA',
    margin: 5,
    fontSize: 15,
    padding: 10,
    backgroundColor: '#C5DBEA',
    borderRadius: 10,
    alignSelf: "center",
  },

  buttonCadastrar: {
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
    marginTop: 20,
    marginBottom: 20,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  linkTermos: {
    color: '#000000',
    textAlign: 'left',
    justifyContent: 'center',
    marginTop: 20,
    paddingLeft: 530,
    paddingRight: 520,
  },

  fg: {
    margin: 10,
    marginTop: 10,
    width: 50,
    height: 60,
  },

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

  titulo: {
    fontWeight: 'bold',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 6,
    marginRight: 6,
  },

  textInputText: {
    width: 300,
    height: 45,
    borderWidth: 1,
    borderColor: '#C5DBEA',
    margin: 5,
    fontSize: 15,
    padding: 10,
    backgroundColor: '#C5DBEA',
    borderRadius: 10,
    alignSelf: "center",
  },

  buttonCadastrar: {
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
    marginTop: 20,
    marginBottom: 20,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  linkTermos: {
    color: '#000000',
    textAlign: 'left',
    justifyContent: 'center',
    marginTop: 20,
    paddingLeft: 530,
    paddingRight: 520,
  },

  fg: {
    margin: 10,
    marginTop: 10,
    width: 50,
    height: 60,
  },



});