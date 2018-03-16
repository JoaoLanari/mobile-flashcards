import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native'

import { addCard } from '../actions'

import {
  lightPrimaryColor,
  dividerColor,
  primaryTextColor,
  accentColor,
  textPrimaryColor,
  secondaryTextColor,
  darkPrimaryColor
} from '../utils/colors'
import { createQuestion } from '../utils/api'

class NewQuestion extends Component {

  state ={
    question: '',
    answer: '',
    questions: this.props.questions[0]
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: `Nova Carta: ${navigation.state.params.title}`
    }
  }

  submit(){
    const id = this.props.navigation.state.params.id
    const question = this.state.question
    const answer = this.state.answer
    const newQuestion = { question: question, answer: answer }
    const questionsObj = JSON.parse(JSON.stringify(this.state.questions)).concat([newQuestion])
    
    this.props.addCard(id, questionsObj)
    createQuestion(id, questionsObj)

    this.setState({question: '', answer: ''})
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={{color: textPrimaryColor, fontSize: 20}} >
            Insira a Pergunta
          </Text>
          <TextInput
            value={this.state.question} 
            onChangeText={(text) => this.setState({question: text})} 
            style={styles.input}
          />
          <Text style={{color: textPrimaryColor, fontSize: 20}} >
            Insira a Resposta
          </Text>
          <TextInput
            value={this.state.answer} 
            onChangeText={(text) => this.setState({answer: text})} 
            style={styles.input}
          />
          <TouchableOpacity onPress={() => this.submit()} style={styles.button}>
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

function mapStateToProps(state, { navigation }) {
  const selectedDeck = navigation.state.params.title
  const ids = Object.keys(state).map((key) => key)
  const decks = ids.map((key) => ({ ...state[key] }))
  const deck = decks.filter(deck => deck.title === selectedDeck)
  return {
    questions: deck.map(deck => deck.questions)
  }
}

export default connect(mapStateToProps, {addCard})(NewQuestion)