import React from 'react'

const Triangle = React.createClass({

  polarToCartesian: function(r, degrees){
    let theta = degrees * Math.PI / 180
    let x = r/2 * Math.cos(theta)
    let y = r/2 * Math.sin(theta)
    return [x, y]
  },

  getMovement: function(length, rotation, smallest){
    let x_y = this.polarToCartesian(length, rotation)

    // We want all the triangles to have the same center point x_y
    // To do this we offset the bottom positioning by 
    // current_triangle.length - smallest_triangle_length / 2 
    let bottom = x_y[0] - ((length - smallest) / 2)
    let left = x_y[1]
    
    return {
      left: left, 
      bottom: bottom
    }
  },

  getStyle: function(length, rotation, smallest){
    // Set minimum length
    length        = length + 100
    let movement  = this.getMovement(length, rotation, smallest)
    return {
      borderBottom:     length + 'px solid red',
      webkitTransform:  'rotate(' + rotation + 'deg)',
      mozTransform:     'rotate(' + rotation + 'deg)',
      msTransform:      'rotate(' + rotation + 'deg)',
      oTransform:       'rotate(' + rotation + 'deg)',
      left:              movement['left'],
      bottom:            movement['bottom']
    } 
  },

  render: function () {
    let category  = this.props.category
    let length    = this.props.length
    let rotation  = this.props.rotation
    let smallest  = this.props.smallest_length
    return <div id="triangle" style={this.getStyle(length, rotation, smallest)}>
      <div className='category_name' >
        {category}
      </div>
  	</div>
  }
})

export default Triangle