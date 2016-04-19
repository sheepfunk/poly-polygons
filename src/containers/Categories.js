import React from 'react'
import {connect} from 'react-redux'
import CategoryForm from '../components/CategoryForm'
import CategoryList from '../components/CategoryList'
import FinishCategories from '../components/FinishCategories'
import Star from '../components/Star'

const mapStateToProps = (state) => {
  return {
    user: state.get('user'),
    categories: state.get('categories'),
    categories_finished: state.get('categories_finished')
  }
}

const Categories = React.createClass({
  render: function () {
    let user = this.props.user 
    let categories = this.props.categories
    let finished = this.props.categories_finished
    return <div class="categories">
      {
        user && !finished && <div> 
          <CategoryForm /> 
          <CategoryList categories={categories} />
          <FinishCategories /> 
        </div> 
      } 
      {
        user && finished && <div>
          <Star categories={categories} />
        </div>
      }
    </div>
  }
})

export default connect(mapStateToProps)(Categories)