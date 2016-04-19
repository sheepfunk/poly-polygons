import React from 'react'

const Triangle = React.createClass({
  getStyle: function(length, rotation){
    return {
      borderBottom:  length + 'px solid red',
      webkitTransform: 'rotate(' + rotation + 'deg)',
      mozTransform: 'rotate(' + rotation + 'deg)',
      msTransform: 'rotate(' + rotation + 'deg)',
      oTransform: 'rotate(' + rotation + 'deg)'
    } 
  },
  render: function () {
    let category = this.props.category
    let length = this.props.length
    let rotation = this.props.rotation
    return <div id="triangle" style={this.getStyle(length, rotation)}>
      <div className='category_name' >
        {category}
      </div>
  	</div>
  }
})

export default Triangle