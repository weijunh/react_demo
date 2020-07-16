import "./search.css"
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateSearch } from '../../redux/action-creators'

class Search extends Component {

  search = () => {
    const search = this.refs.content.value.trim()
    if (search) {
      this.props.updateSearch(search)
    }
  }

  render () {
    return (
      <section className="jumbbotron" >
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter" ref="content" />
          <button onClick={this.search}>Search</button>
        </div>
      </section >
    )
  }
}

export default connect(
  null, // 数据
  {
    updateSearch
  }// 操作数据的方法
)(Search)