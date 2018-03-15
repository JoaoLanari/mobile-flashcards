export const ADD_DECK = 'ADD_PACK'
export const ADD_CARD = 'ADD_CARD'

export function addDeck (id, title) {
  return {
    type: ADD_DECK,
    id,
    title
  }
}

export function addCard (id, questionsObj) {
  return {
    type: ADD_CARD,
    id,
    questionsObj
  }
}