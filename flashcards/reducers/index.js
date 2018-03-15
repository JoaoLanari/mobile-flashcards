import _ from 'lodash'

import { ADD_DECK, ADD_CARD } from '../actions'

function flashcards (state = {
  React: {
    id: 'React',
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  javascript: {
    id: 'JavaScript',
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}, action) {
  const { title, id, questionsObj, type } = action

  switch (type) {
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