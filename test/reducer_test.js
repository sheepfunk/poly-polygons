import { expect } from 'chai'
import {List, Map} from 'immutable'
import categories from '../src/reducer.js'
import { INITIAL_STATE } from '../src/reducer.js'

describe("Reducer Test", () => {
	
	it("should return an initial state", () => {
		let result = categories(undefined, {})
   	expect(result).to.eql(INITIAL_STATE)
	})

	it("should add a user", () => {
		let expectedState = Map({
      user: 'Skye'
    })
    
		let result = categories(INITIAL_STATE, {type:'ADD_USER', user:'Skye'})
		expect(result).to.eql(expectedState)
	})

	it("should add a category", () => {
		let initialState = Map({
			user: 'Skye'
		})
		let expectedState = Map({
			user: 'Skye',
			categories: Map({
				'Love': 0
			})
		})
		let result = categories(initialState, {type:'ADD_CATEGORY', category:'Love'})
		expect(result).to.eql(expectedState)
	})

})