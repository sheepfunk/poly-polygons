import React from 'react'
import { connect } from 'react-redux'

const TextForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault()
    this.props.dispatch({
      type: this.props.action,
      value: this.refs.input.value
    })
  },
  render: function () {
    return <div className='user_input_form'>
      <form onSubmit = { this.onSubmit } >
        <input ref="input" />
        <input type="submit" />
      </form>
    </div>
  }
})

export default connect()(TextForm)


