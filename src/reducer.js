import {List, Map} from 'immutable'

export const INITIAL_STATE = Map()

export default function categories(state=INITIAL_STATE, action) {
	switch(action.type){
		case('ADD_USER'):
			return Map({
				user: action.user
			})
		default:
			return state
	}

}