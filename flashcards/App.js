import React, {Component} from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StyleSheet, View, StatusBar } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { Constants } from 'expo'

import Packs from './components/Packs'
import NewPack from './components/NewPack'

import reducer from './reducers'
import { darkPrimaryColor, defaultPrimaryColor, textPrimaryColor } from './utils/colors'

function FlashcardsStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}} >
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  Packs: {
    screen: Packs,
    navigationOptions: {
      tabBarLabel: 'Baralhos'
    }
  },
  NewPack: {
    screen: NewPack,
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


const store = createStore(reducer)


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <FlashcardsStatusBar backgroundColor={darkPrimaryColor} barStyle='light-content' />
          <Tabs />
        </View>        
      </Provider>
    )
  }
}

