import React from 'react'
import Triangle from './Triangle'

const Star = React.createClass({
	getRotation: function(size, counter) {
		return (360 / size) * counter
	},
	getSmallest: function(){
		let categories 	= this.props.categories.toJS()
		let vals 				= Object.keys(categories).map(key => categories[key])
		return Math.min.apply(Math, vals)
	},
  render: function () {
    let categories 	= this.props.categories
    let counter 		= 0 
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
	    				key={ Math.random() } 
	    				smallest_length={ this.getSmallest() } /> 
	    		})
	    	}
    	</div>
  	</div>
  }
})

export default Star
