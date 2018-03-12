export const ADD_PACK = 'ADD_PACK'
export const ADD_CARD = 'ADD_CARD'

export function addPack (title) {
  return {
    type: ADD_PACK,
    title
  }
}

export function addCard (id, question, answer) {
  return {
    type: ADD_CARD,
    id,
    question,
    answer
  }
}