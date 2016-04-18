import React from 'react'
import CategoryInput from './CategoryInput'

const CategoryList = React.createClass({
  render: function () {
  	let categories = this.props.categories ? this.props.categories.toJS() : []
    return <div class="category_list">
    	<div> On a scale of 1 to 100 how would you rate this quality in your relationship </div>
    	{ 
    		Object.keys(categories).map(key => { 
    			return <CategoryInput name={ key } value={ categories['key'] } />
    		})
    	}
    </div> 
  }
})

export default CategoryList
