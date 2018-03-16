import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = 'flashcards:decks'

let initialDecks = {
  React: {
    id: 'React',
    title: 'React',
    questions: [
      {        
        question: 'O que é React?',
        answer: 'Uma biblioteca para gerenciar interfaces de usuário',
      },
      {
        question: 'Onde você faz solicitações do Ajax no React?',
        answer: 'No evento de ciclo de vida componentDidMount',
      }
    ]
  },
  JavaScript: {
    id: 'JavaScript',
    title: 'JavaScript',
    questions: [
      {        
        question: 'O que é um closure?',
        answer: 'A combinação de uma função e o ambiente lexicalwithin onde a função é declarada.',
      }
    ]
  }
};

export function getAllDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    return results === null ? initialState() : JSON.parse(results)
  });
}

export function createDeck(deck) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck))
}



export function createQuestion(id, questionsObj) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
    const decks = JSON.parse(result)
    
    const updateDecksList = {
      ...decks,
        [id]: {
          ...decks[id],
          questions: questionsObj
        }
    }
    AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(updateDecksList))
  })
}

export function initialState() {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialDecks))
  return initialDecks
}