import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

class NewQuestion extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Nova Pergunta: ${navigation.state.params.title}`
    }
  }
  render() {
    return (
      <View>
        <Text>Insira a Pergunta:</Text>
        <TextInput />
        <Text>Insira a Resposta:</Text>
        <TextInput />
        <TouchableOpacity>
          <Text>CRIAR PERGUNTA</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default NewQuestion 