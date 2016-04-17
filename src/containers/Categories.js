import React from 'react'
import {connect} from 'react-redux'
import CategoryForm from '../components/CategoryForm'
import CategoryList from '../components/CategoryList'

const mapStateToProps = (state) => {
  return {
    user: state.get('user'),
    categories: state.get('categories')
  }
}

const Categories = React.createClass({
  render: function () {
    let user = this.props.user 
    let categories = this.props.categories
    return <div class="categories">
      {
        user ? <div> <CategoryForm /> <CategoryList categories={categories} /> </div> : null
      }
    </div>
  }
})

export default connect(mapStateToProps)(Categories)