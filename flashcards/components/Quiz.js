import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView 
} from 'react-native'

import {
  lightPrimaryColor,
  dividerColor,
  primaryTextColor,
  accentColor,
  textPrimaryColor,
  secondaryTextColor,
  darkPrimaryColor
} from '../utils/colors'
import { clearLocalNotification, setLocalNotification } from '../utils/notification'

class Quiz extends Component {

  state = {
    question: 1,
    totalQuestionsNumber: this.props.questions[0].length,
    correctAnswers: 0,
    showAnswer: false
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: `Quiz: ${navigation.state.params.title}`
    }
  }

  submitAnswer(number) {

    const newQuestion = this.state.question + 1
    const newCorrectAnswer = this.state.correctAnswers + number

    this.setState({
      question: newQuestion,
      correctAnswers: newCorrectAnswer,
      showAnswer: false,
    })
  }

  resetState() {
    this.setState({
      question: 1,
      correctAnswers: 0,
      showAnswer: false,
    })
    clearLocalNotification()
    setLocalNotification()
  }

  finish() {
    clearLocalNotification()
    setLocalNotification()
    this.props.navigation.navigate(
      'Deck',
      { title: this.props.navigation.state.params.title }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {(this.state.showAnswer === false && (this.state.question <= this.props.questions[0].length)) && (
          <View style={styles.quizContainer}>
            <View style={styles.headerContainer}>
              <Text style={{ color: secondaryTextColor }}>
                Faltam {(this.state.totalQuestionsNumber - this.state.question) + 1} questões
              </Text>
              <Text style={{ color: secondaryTextColor }} >
                Acertos: {this.state.correctAnswers}/{this.state.totalQuestionsNumber} ou {this.state.correctAnswers / this.state.totalQuestionsNumber * 100}%
              </Text>
            </View>
            <View style={styles.questionAndAnswer}>
              <Text style={{color: textPrimaryColor, fontSize: 15}}>Pergunta</Text>
              <Text style={{color: textPrimaryColor, fontSize: 25, textAlign: 'center'}}>
                {this.props.questions[0][this.state.question - 1].question}
              </Text>
            </View>
            <TouchableOpacity style={[styles.buttonsContainer, styles.button]}>
              <Text 
                style={{color: textPrimaryColor, textAlign: 'center'}}
                onPress={() => this.setState({ showAnswer: true })}
              >
                 VER RESPOSTA
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {(this.state.showAnswer === true && (this.state.question <= this.props.questions[0].length)) && (
          <View style={styles.quizContainer}>
            <View style={styles.headerContainer}>
              <Text style={{ color: secondaryTextColor }}>
                Faltam {(this.state.totalQuestionsNumber - this.state.question) + 1} questões
              </Text>
              <Text style={{ color: secondaryTextColor }} >
                Acertos: {this.state.correctAnswers}/{this.state.totalQuestionsNumber} ou {this.state.correctAnswers / this.state.totalQuestionsNumber * 100}%
              </Text>
            </View>
            <View style={styles.questionAndAnswer}>
              <Text style={{color: textPrimaryColor, fontSize: 15}}>Resposta</Text>
              <Text style={{color: textPrimaryColor, fontSize: 25, textAlign: 'center'}}>
                {this.props.questions[0][this.state.question - 1].answer}
              </Text>
            </View>
            <View style={styles.buttonsContainer} >
              <TouchableOpacity style={[styles.button, {marginBottom: 15}]}>
                <Text
                  style={{color: textPrimaryColor, textAlign: 'center'}}
                  onPress={() => this.submitAnswer(1)} 
                >
                  RESPOSTA CORRETA
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, {backgroundColor: 'red'}]}>
                <Text
                  style={{color: textPrimaryColor, textAlign: 'center'}}
                  onPress={() => this.submitAnswer(0)}
                >
                  RESPOSTA ERRADA
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {(this.state.question > this.props.questions[0].length) && (
          <View style={styles.quizContainer}>
            <View style={{margin: 25}} >
              <Text style={{textAlign: 'center', fontSize: 50, color: textPrimaryColor}}>Resultado Final</Text>
              <Text style={{textAlign: 'center', fontSize: 35, color: textPrimaryColor}}>
                {this.state.correctAnswers}/{this.state.totalQuestionsNumber} ou {this.state.correctAnswers / this.state.totalQuestionsNumber * 100}%
              </Text>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={[styles.button, {marginBottom: 15}]}>
                <Text
                  style={{color: textPrimaryColor, textAlign: 'center'}}
                  onPress={() => this.resetState()}
                >
                  RECOMEÇAR QUIZ
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text onPress={() => this.finish()} 
                  style={{color: textPrimaryColor, textAlign: 'center'}}
                >
                  VOLTAR AO BARALHO
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightPrimaryColor,
  },
  quizContainer: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 5,
    paddingLeft: 5,
  },
  questionAndAnswer: {
    alignItems: 'center',
    padding: 30
  },
  buttonsContainer: {
    marginBottom: 20,
    justifyContent: 'center',
  },
  button: {
    marginLeft: 50,
    marginRight: 50,
    padding: 15,
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

export default connect(mapStateToProps)(Quiz)