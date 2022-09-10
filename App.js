/*Código Login
FATEC Barueri - Design de Mídias Digitais
Programação para Mobile II
Professora Denise Lemes Fernandes Neves
Luis Carlos Oliveira Santos Junior*/

import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

import Login from './componentes/Login';

export default function App() {

  return (

    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <Login/>
    </View>
  );
};