import { restartGame, makeGuess, generateAuralUpdate, MAKE_GUESS, RESTART_GAME, GENERATE_AURAL_UPDATE } from './actions';

describe('testing the reducer', () => {

  it('restartGame should return correct type and value', () => {
          const correctAnswer = 4;
          const action = restartGame(correctAnswer);
          expect(action.type).toEqual(RESTART_GAME);
          expect(action.correctAnswer).toEqual(correctAnswer);
      });

      it('makeGuess should return correct type and value', () => {
              const guess = 4;
              const action = makeGuess(guess);
              expect(action.type).toEqual(MAKE_GUESS);
              expect(action.guess).toEqual(guess);
          });

          it('generateAuralUpdate should return correct type and value', () => {
                  const action = generateAuralUpdate();
                  expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
              });
});
