import React from 'react'

const Welcome = React.createClass({
  render: function () {
    return <div className="welcome">
    	<h1> Hi {this.props.user} </h1>
  	</div>
  }
})

export default Welcome
