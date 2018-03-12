import { ADD_PACK, ADD_CARD } from '../actions'

function flashcards (state = {}, action) {
  const { title, id, question, answer, type } = action

  switch (type) {
    case ADD_PACK :
      return state

    case ADD_CARD :
      return state
  
    default:
      return state
  }
}

export default flashcards