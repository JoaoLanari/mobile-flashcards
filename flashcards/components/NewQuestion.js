import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import {
  lightPrimaryColor,
  dividerColor,
  primaryTextColor,
  accentColor,
  textPrimaryColor,
  secondaryTextColor,
  darkPrimaryColor
} from '../utils/colors'

class NewQuestion extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Nova Carta: ${navigation.state.params.title}`
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={{color: textPrimaryColor, fontSize: 20}} >Insira a Pergunta</Text>
          <TextInput style={styles.input}/>
          <Text style={{color: textPrimaryColor, fontSize: 20}} >Insira a Resposta</Text>
          <TextInput style={styles.input}/>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: textPrimaryColor}}>CRIAR CARTA</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightPrimaryColor,
  },
  contentContainer: {
    flex: 0.70,
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 30,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: dividerColor,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: accentColor
  },
  input: {
    width: '85%',
    marginTop: 15,
    marginBottom: 30,
    padding: 5,
    backgroundColor: lightPrimaryColor,
    borderWidth: 0.5,
    borderRadius: 2,
    borderColor: dividerColor,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  button: {
    padding: 15,
    margin: 10,
    backgroundColor: darkPrimaryColor,
    borderWidth: 0.5,
    borderRadius: 2,
    borderColor: dividerColor,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  }
})

export default NewQuestion 