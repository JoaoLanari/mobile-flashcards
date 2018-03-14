import React, { Component } from 'react'
import { View, Text, } from 'react-native'

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Quiz: ${navigation.state.params.title}`
    }
  }
  render() {
    return (
      <View>
        <Text>Quiz</Text>
      </View>
    )
  }
}

export default Quiz