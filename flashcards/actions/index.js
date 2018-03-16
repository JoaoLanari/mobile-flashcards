export const ADD_DECK = 'ADD_PACK'
export const ADD_CARD = 'ADD_CARD'
export const FETCH_DECKS = 'FETCH_DECKS'

export function fetchDecksAction(decks) {
  return {
    type: FETCH_DECKS,
    decks
  }  
}

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