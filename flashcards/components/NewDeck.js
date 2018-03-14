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

class NewDeck extends Component {

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.contentContainer}>
          <Text style={{fontSize: 30, color: textPrimaryColor, textAlign: 'center'}} >
            Insira o NOME do novo baralho no campo abaixo
          </Text>
          <TextInput style={styles.input} />
          <TouchableOpacity style={styles.button} >
            <Text style={{color: textPrimaryColor}} >CRIAR BARALHO</Text>
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
    marginTop: 30,
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


export default NewDeck