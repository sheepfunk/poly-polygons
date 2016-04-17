import { expect } from 'chai'
import {List, Map} from 'immutable'
import categories from '../src/reducer.js'
import { INITIAL_STATE } from '../src/reducer.js'

describe("Reducer Test", () => {
	
	it("should return an initial state", () => {
		let result = categories(undefined, {})
   	expect(result).to.eql(INITIAL_STATE)
	})

})