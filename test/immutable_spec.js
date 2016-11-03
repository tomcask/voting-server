import { expect } from 'chai'
import { List, Map } from 'immutable'

describe('immutability', () => {
	xdescribe('a number', () => {
		function increment(currentState) {
			return currentState + 1
		}

		it('its immutable', () => {
			let state = 42
			let nextState = increment(state)

			expect(nextState).to.equal(45)
			expect(state).to.equal(42)
		})
	})

	describe('A list', () =>{
		function addMovie(currentState, movie){
			return currentState.update('movies', movies => movies.push(movie))
		}

		it('is immutable', ()=> {
			let state = Map({
				movies : List.of('Trainspotting', '28 Days Later')
			})
			let nextState = addMovie(state, 'Sunshine')

			expect(nextState).to.equal(Map({
				movies: List.of(
					'Trainspotting',
					'28 Days Later',
					'Sunshine'
				)
			}))

			expect(state).to.equal(Map({
				movies: List.of(
					'Trainspotting',
					'28 Days Later'
				)
			}))
		})
	})

})