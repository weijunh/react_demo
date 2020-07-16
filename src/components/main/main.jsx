import "./main.css"
import { connect } from 'react-redux'
import React, { Component } from 'react'
import axios from 'axios'

class Main extends Component {
  state = {
    firstView: true, // 默认显示的第一个界面
    loading: false, // 发送请求的时候显示的第二个界面
    users: [], // 用来存储请求之后的用户信息对象的
    errorMsg: '' // 用来存储错误信息的
  }
  async componentWillReceiveProps (nextProps) {
    const url = `https://api.github.com/search/users?q=${nextProps.searchName}`

    this.setState({
      firstView: false,
      loading: true
    })
    try {
      const response = await axios.get(url)
      // console.log(response.data.items);
      const users = response.data.items.map((user) => ({
        name: user.login,
        avatar_url: user.avatar_url,
        html_url: user.html_url
      }))

      //更新数据
      this.setState({
        loading: false,
        users
      })

    } catch (error) {
      this.setState({
        loading: false,
        errorMsg: '请求失败:' + error
      })
    }

  }

  render () {
    const { firstView, loading, users, errorMsg } = this.state
    if (firstView) {
      return <h1>请输入内容</h1>
    } else if (loading) {
      return <h1>正在请求中....</h1>
    } else if (errorMsg) {
      return <h1>{errorMsg}</h1>
    } else {
      return (
        <div className="row">
          {
            users.map((user, index) => {
              return (
                <div className="card" key={index}>
                  <a href={user.html_url} >
                    <img src={user.avatar_url} alt={user.name} style={{ width: 100 }} />
                  </a>
                  <p className="card-text">{user.name}</p>
                </div>
              )
            })
          }
        </div>
      )
    }
  }
}

export default connect(
  (state) => ({
    searchName: state.searchName
  }),
  null
)(Main)