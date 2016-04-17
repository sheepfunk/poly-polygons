import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import categories from './src/reducer'
import App from './src/components/App'

const store = createStore(categories)

ReactDOM.render(
	<Provider store = { store } >
		<App />
	</Provider>,
	document.getElementById('root')
)

