import React from 'react'
import {connect} from 'react-redux'
import TextForm from '../components/TextForm'
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
    	{ 
    		user ? <Welcome user={user} /> : 
      	<div>
      		<div> 
        		Tell me who you are 
      		</div>
    			<TextForm action={'ADD_USER'}/>
    		</div> 
    	}
  	</div>
  }
})

export default connect(mapStateToProps)(User)