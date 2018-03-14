import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

class NewDeck extends Component {
  
  render() {
    return (
      <View>
        <Text>Insira o Nome do novo baralho no campo abaixo:</Text>
        <TextInput />
        <TouchableOpacity>
          <Text>CRIAR BARALHO</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default NewDeck