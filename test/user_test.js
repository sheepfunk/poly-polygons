import { expect } from 'chai'
import {List, Map} from 'immutable'
import categories from '../src/reducer.js'
import { INITIAL_STATE } from '../src/reducer.js'

describe("User Test", () => {

	it("should add a user", () => {
		let expectedState = Map({
      user: 'Skye'
    })
    
		let result = categories(INITIAL_STATE, {type:'ADD_USER', value:'Skye'})
		expect(result).to.eql(expectedState)
	})

})