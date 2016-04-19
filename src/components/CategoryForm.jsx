import React from 'react'
import TextForm from '../components/TextForm'

const CategoryForm = React.createClass({
  render: function () {
    return <div className="CategoryForm">      
  		<div> 
    		What is important in your relationship
  		</div>
			<TextForm action={'ADD_CATEGORY'}/>
  	</div>
  }
})

export default CategoryForm
