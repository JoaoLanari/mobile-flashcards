import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    }
  }
  render() {
    return (
      <View>
        {this.props.decks.filter(deck => deck.title === this.props.navigation.state.params.title)
          .map((deck, key) => (
            <View key={key}>
              <Text>{deck.title}</Text>
              <Text>Numero de Cartas: {deck.questions.length}</Text>
            </View>
          ))}
          <TouchableOpacity onPress={() => this.props.navigation.navigate(
            'NewQuestion',
            {title: this.props.navigation.state.params.title}
          )} >
            <Text>NOVA PERGUNTA</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate(
            'Quiz',
            {title: this.props.navigation.state.params.title}
          )} >
            <Text>COMEÇAR O QUIZ</Text>
          </TouchableOpacity>
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

export default connect(mapStateToProps)(Deck)