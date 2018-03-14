import { ADD_PACK, ADD_CARD } from '../actions'

function flashcards (state = {
  React: {
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
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}, action) {
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