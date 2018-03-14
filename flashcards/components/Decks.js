import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'

class Decks extends Component {
  render() {
    
    return (
      <View>
        {this.props.decks.map((deck, key) => (
          <View key={key}>
            <Text>{deck.title}</Text>
            <Text>Numero de Cartas: {deck.questions.length}</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate(
              'Deck',
              { title: deck.title }
            )} >
              <Text>IR PARA BARALHO</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    )
  }
}

function mapStateToProps (state) {
  const ids = Object.keys(state).map((key) => key)
  return {
    decks: ids.map((key) =>({
      ...state[key]
    }))
  }
}

export default connect(mapStateToProps)(Decks)