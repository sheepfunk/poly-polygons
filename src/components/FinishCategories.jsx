import React from 'react'
import { connect } from 'react-redux'

const FinishCategories = React.createClass({
  onSubmit: function(e) {
    e.preventDefault()
    this.props.dispatch({
      type: 'FINISH_CATEGORIES',
      value: true
    })
  },
  render: function () {
    return <div class='finish_categories_form' >
      {
        <form onSubmit = { this.onSubmit } >
          <label> Done Adding Categories </label>
          <input type="hidden" value={true} />
          <input type="submit" />
        </form> 
      }
    </div>
  }
})

export default connect()(FinishCategories)


