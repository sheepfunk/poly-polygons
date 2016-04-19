import React from 'react'
import { connect } from 'react-redux'

const CategoryInput = React.createClass({
  onSubmit: function(e) {
    e.preventDefault()
    this.props.dispatch({
      type: 'RATE_CATEGORY',
      value: this.refs.input.value,
      name: this.refs.input.name
    })
  },
  render: function () {
    return <div class='category_rating_form' >
      {
        this.props.value == undefined || this.props.value == 0 ? 
        <form onSubmit = { this.onSubmit } >
          <label> { this.props.name } </label>
          <input type="number"  name={ this.props.name } ref="input" />
          <input type="submit" />
        </form>
        : this.props.name + ' - ' + this.props.value 
      }
    </div>
  }
})

export default connect()(CategoryInput)


