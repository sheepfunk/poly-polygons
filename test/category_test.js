import { expect } from 'chai'
import {List, Map} from 'immutable'
import categories from '../src/reducer.js'

describe("Category Test", () => {

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

	it("adding a category does not modify previous state", () => {
		let initialState = Map({
			user: 'Skye',
			categories: Map({
				'Love': 90
			})
		})
		let expectedState = Map({
			user: 'Skye',
			categories: Map({
				'Love': 90,
				'Communication': 0
			})
		})
		let result = categories(initialState, {type:'ADD_CATEGORY', category:'Communication'})
		expect(result).to.eql(expectedState)
		expect(initialState).to.eql(Map({
			user: 'Skye',
			categories: Map({
				'Love': 90
			})
		}))
	})


})	


