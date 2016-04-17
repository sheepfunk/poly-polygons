import {List, Map} from 'immutable'

export const INITIAL_STATE = Map()

export default function categories(state=INITIAL_STATE, action) {
	switch(action.type){
		case('ADD_USER'):
			return Map({
				user: action.value
			})
		case('ADD_CATEGORY'):
			var newCategories = (state.get('categories') === undefined ) ? new Map() : state.get('categories')
			var newState = state.set('categories', newCategories.set(action.value, 0))
			return newState
		default:
			return state
	}

}