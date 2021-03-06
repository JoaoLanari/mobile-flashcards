import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native'

import { addDeck } from '../actions'

import {
  lightPrimaryColor,
  dividerColor,
  primaryTextColor,
  accentColor,
  textPrimaryColor,
  secondaryTextColor,
  darkPrimaryColor
} from '../utils/colors'

import { createDeck } from '../utils/api'

class NewDeck extends Component {

  state = {
    title: ''
  }

  submit() {
    const title = this.state.title
    const id = title //tirando carecteresm especiais e espaço
    const deckToStorage = {
      [id]: {
        id: id,
        title: title,
        questions: []
      }
    }    
    this.props.addDeck(id, title)
    createDeck(deckToStorage)

    this.setState({title: ''})
    this.props.navigation.navigate(
      'Deck',
      {title: title}
    )
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.contentContainer}>
          <Text style={{fontSize: 30, color: textPrimaryColor, textAlign: 'center'}} >
            Insira o NOME do novo baralho no campo abaixo
          </Text>
          <TextInput 
            value={this.state.title} 
            onChangeText={(text) => this.setState({title: text})} 
            style={styles.input} 
          />
          <TouchableOpacity 
            onPress={() => this.submit()}  
            style={styles.button}
          >
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


export default connect(null, {addDeck})(NewDeck)