import React from 'react'
import Triangle from './Triangle'

const Star = React.createClass({
	getRotation: function(size, counter) {
		return (360 / size) * counter
	},
  render: function () {
    let categories = this.props.categories
    let counter = 0 
    return <div className="star">
    	<h4> Here is what your poly star looks like </h4>
    	<div className="polygon_container">
	    	{
	    		Object.keys(categories.toJS()).map((c, idx) => {
	    			counter++
	    			return <Triangle 
	    				category={ c } 
	    				rotation={ this.getRotation(categories.size, counter) } 
	    				length={ categories.get(c) }
	    				point={ idx } 
	    				key={ Math.random() } /> 
	    		})
	    	}
    	</div>
  	</div>
  }
})

export default Star

/*

Algorithm 

- 1 triangle for each category
- border bottom of each triangle = category.value
- each subsequent triangle should be rotated x degrees
	where x = # of categories / 360
- each triangle should be moved to 




*/