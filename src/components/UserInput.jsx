import React from 'react'
import { connect } from 'react-redux'

const UserInput = React.createClass({
  onSubmit: function(e) {
    e.preventDefault()
    this.props.dispatch({
      type: 'ADD_USER',
      user: this.refs.input.value
    })
  },
  render: function () {
    return <div class='user_input_form'>
      <div> 
        Tell me who you are 
      </div>
      <form onSubmit = { this.onSubmit } >
        <input ref="input" />
        <input type="submit" />
      </form>
    </div>
  }
})

export default connect()(UserInput)
