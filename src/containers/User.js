import React from 'react'
import {connect} from 'react-redux'
import UserInput from '../components/UserInput'
import Welcome from '../components/Welcome'

const mapStateToProps = (state) => {
  return {
    user: state.get('user')
  }
}

const User = React.createClass({
  render: function () {
    let user = this.props.user 
    return <div class="user">
    	{ user ? <Welcome user={user} /> : <UserInput /> }
  	</div>
  }
})

export default connect(mapStateToProps)(User)