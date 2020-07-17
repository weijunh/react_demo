import "./search.less"
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateSearch } from '../../redux/action-creators'
import { Button } from 'antd'
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
          <Button type="primary" onClick={this.search}>Search</Button>
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