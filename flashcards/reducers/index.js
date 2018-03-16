import _ from 'lodash'

import { ADD_DECK, ADD_CARD, FETCH_DECKS } from '../actions'

function flashcards (state = {}, action) {
  const { title, id, questionsObj, decks, type } = action

  switch (type) {

    case FETCH_DECKS : {
      return {
        ...state, ...decks
      }
    }


    case ADD_DECK :
      return {
        ...state,
        [id]: {
          id: id,
          title: title,
          questions: []
        }
      }

    case ADD_CARD :
      return {
        ...state,
          [id]: {
            ...state[id],
            questions: questionsObj
          }
      }
  
    default:
      return state
  }
}

export default flashcards