import React from 'react'

const CategoryList = React.createClass({
	renderCategories: function () {
		let renderedKeys = []		
		let categories = this.props.categories
		if (categories != undefined) {
			renderedKeys = Object.keys(categories.toJS()).map(key => {
				return "<div>" + key + ":" + categories.get(key)  + "</div>"
			})
		}
		return { '__html' : renderedKeys.join(' ') }
	},
  render: function () {
    return <div class="category_list" dangerouslySetInnerHTML={ this.renderCategories() } /> 
  }
})

export default CategoryList
