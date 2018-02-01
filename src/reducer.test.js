import { makeGuess, restartGame, generateAuralUpdate } from './actions';
import reducer from './reducer';


describe('testing the reducer', () => {
  it('makeGuess adds a number to guessList & feedback ', () => {
             let state = {
               guesses: [],
               feedback: 'Make your guess!',
               correctAnswer: 34
             };

             let newState = reducer(state, makeGuess(4));
             expect(newState).toEqual({
               guesses: [4],
               feedback: "You're Cold...",
               correctAnswer: 34
             });

  });

  it('restartGame changes state back to defualt state ', () => {

    let state = {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: 34
    };

    let newState = reducer(state, restartGame(5));

    expect(newState).toEqual({
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: 5
    });

  });
});



// describe('addCard', () => {
//      it('Should add new cards', () => {
//          let state = {
//              lists: [list1, list2] 
//          };
//          state = trelloReducer(state, addCard(card1Text, 0));
//          state = trelloReducer(state, addCard(card2Text, 1));
//          state = trelloReducer(state, addCard(card3Text, 1));
//          expect(state).toEqual({
//              lists: [{
//                  title: list1Title,
//                  cards: [card1]
//              }, {
//                  title: list2Title,
//                  cards: [card2, card3]
//              }]
//          });
//      });
//  });
