/*Código Login
FATEC Barueri - Design de Mídias Digitais
Programação para Mobile II
Professora Denise Lemes Fernandes Neves
Luis Carlos Oliveira Santos Junior*/

import React, { Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Image, TouchableOpacity } from 'react-native';

import logo from './../img/logo.jpg';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>

        <Image source={logo} style={styles.logo} />

        <TextInput
          style={styles.textInputPesquisa}
          placeholder="Pesquisar"
          underlineColorAndroid="transparent"
        />

        <View>
          <View style={styles.caixa}>
            <Text style={styles.title}>
              Vaga 1
            </Text>

            <View style={styles.fixToText}>
              <Button
                title="Acessar"
                color="#000000"
                onPress={() => Alert.alert('Acessar')}
              />
            </View>
          </View>
        </View>

        <View style={styles.caixa}>
            <Text style={styles.title}>
              Vaga 2
            </Text>

            <View style={styles.fixToText}>
              <Button
                title="Acessar"
                color="#000000"
                onPress={() => Alert.alert('Acessar')}
              />
            </View>
          </View>

          <View style={styles.caixa}>
            <Text style={styles.title}>
              Vaga 3
            </Text>

            <View style={styles.fixToText}>
              <Button
                title="Acessar"
                color="#000000"
                onPress={() => Alert.alert('Acessar')}
              />
            </View>
          </View>
        
      </View>

    );
  }
}

const styles = StyleSheet.create({

  logo: {
    marginTop: 50,
    marginBottom: 10,
    alignSelf: "center",
    width: 200,
    height: 60,
  },

  textInputPesquisa: {
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

  caixa: {
    width: 300,
    height: 100,
    backgroundColor: '#F6F7F7',
    margin: 10,
    fontSize: 15,
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },

  title: {
    textAlign: 'left',
    margin: 5,
    marginBottom: 15,
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderRadius: 20,
  },

});