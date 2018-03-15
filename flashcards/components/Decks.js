import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { 
  lightPrimaryColor, 
  dividerColor, 
  primaryTextColor,
  accentColor, 
  textPrimaryColor, 
  secondaryTextColor 
} from '../utils/colors'

class Decks extends Component {
  render() {
    
    return (
      <ScrollView style={styles.container} >
        {this.props.decks.map((deck, key) => (
          <TouchableOpacity key={key} style={styles.deckContainer} onPress={() => this.props.navigation.navigate(
            'Deck',
            { title: deck.title }
          )} >
            <Text style={{color:textPrimaryColor, fontSize: 50}} >{deck.title}</Text>
            <View style={styles.cardNumberContainer} >
              <Text style={{color:primaryTextColor, fontSize: 35}}>{deck.questions.length}</Text>
              <Text style={{color:secondaryTextColor, fontSize: 15}}>
                {deck.questions.length === 1 
                  ? 'carta'
                  : 'cartas'}
              </Text>
              <Text>{deck.title}</Text>         
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightPrimaryColor,
  },
  deckContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
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
  cardNumberContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  }
})

function mapStateToProps (state) {
  const ids = Object.keys(state).map((key) => key)
  return {
    decks: ids.map((key) =>({
      ...state[key]
    }))
  }
}

export default connect(mapStateToProps)(Decks)