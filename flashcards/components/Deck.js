import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {
  lightPrimaryColor,
  dividerColor,
  primaryTextColor,
  accentColor,
  textPrimaryColor,
  secondaryTextColor,
  darkPrimaryColor
} from '../utils/colors'


class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    }
  }
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.deckContainer} >
          {this.props.decks.filter(deck => deck.title === this.props.navigation.state.params.title)
            .map((deck, key) => (
              <View key={key} style={styles.headerContainer} >
                <Text style={{ color: textPrimaryColor, fontSize: 50 }}>{deck.title}</Text>
                <View style={styles.cardNumberContainer} >
                  <Text style={{ color: primaryTextColor, fontSize: 35 }}>{deck.questions.length}</Text>
                  <Text style={{ color: secondaryTextColor, fontSize: 15 }}>
                    {deck.questions.length === 1
                      ? 'carta'
                      : 'cartas'}
                  </Text>
                </View>
              </View>
            ))}
          <View style={styles.buttonsContainer} >
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate(
                'NewQuestion',
                { title: this.props.navigation.state.params.title }
              )} >
              <Text style={{ color: textPrimaryColor, textAlign: 'center' }}>NOVA CARTA</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate(
                'Quiz',
                { title: this.props.navigation.state.params.title }
              )} >
              <Text style={{ color: textPrimaryColor, textAlign: 'center' }}>COMEÇAR O QUIZ</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.button, {width: '40%', }]}
          onPress={() => this.props.navigation.navigate(
            'Home'
          )} >
          <Text style={{ color: textPrimaryColor, textAlign: 'center' }}>IR PARA HOME</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightPrimaryColor,
    alignItems: 'center'
  },
  deckContainer: {
    width: '80%',
    justifyContent: 'space-between',
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
  headerContainer: {
    alignItems: 'center',
  },
  cardNumberContainer: {
    alignItems: 'center',
    padding: 10
  },
  buttonsContainer: {
    marginBottom: 20
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

function mapStateToProps(state) {
  const ids = Object.keys(state).map((key) => key)
  return {
    decks: ids.map((key) => ({
      ...state[key]
    }))
  }
}

export default connect(mapStateToProps)(Deck)