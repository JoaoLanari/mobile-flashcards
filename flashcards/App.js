import React, {Component} from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StyleSheet, View, StatusBar } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'

import Decks from './components/Decks'
import NewDeck from './components/NewDeck'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import NewQuestion from './components/NewQuestion'

import reducer from './reducers'
import { setLocalNotification } from './utils/notification'
import { darkPrimaryColor, defaultPrimaryColor, textPrimaryColor } from './utils/colors'

function FlashcardsStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}} >
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Baralhos'
    }
  },
  NewPack: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'Novo Baralho'
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: textPrimaryColor,
    style: {
      height: 56,
      backgroundColor: defaultPrimaryColor,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavegator = StackNavigator({
  Home: {
    screen: Tabs
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: textPrimaryColor,
      headerStyle: {
        backgroundColor: defaultPrimaryColor
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: textPrimaryColor,
      headerStyle: {
        backgroundColor: defaultPrimaryColor
      }
    }
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: {
      headerTintColor: textPrimaryColor,
      headerStyle: {
        backgroundColor: defaultPrimaryColor
      }
    }
  }
})

const store = createStore(reducer)


export default class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <FlashcardsStatusBar backgroundColor={darkPrimaryColor} barStyle='light-content' />
          <MainNavegator />
        </View>        
      </Provider>
    )
  }
}

