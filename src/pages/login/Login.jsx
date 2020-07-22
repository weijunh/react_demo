import React, { Component } from 'react'
import './Login.less'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { reqLogin } from '../../api/index.js'
import { setItem, getItem, removeItem } from '../../utils/storage.js'
import { connect } from 'react-redux';
import { saveUser } from '../../redux/action-creators.js'



@connect(null, {
  saveUser
})
@Form.create()
class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values  ', values);
        const req = await reqLogin(values.uid, values.pwd)
        if (req.data.isSuccess) {
          setItem("token", req.data.body)
          // token保存到redux中
          this.props.saveUser(req.data.body)
          if (values.rem) {
            setItem("uid", values.uid)
            setItem("pwd", values.pwd)
          } else {
            removeItem("uid")
            removeItem("pwd")
          }
          message.success('登录成功');
          // this.props.history.replace('/')
        } else {
          message.error('网路错误')
        }
      }
    });
  };

  componentDidMount () {
    if (getItem("pwd")) {
      this.props.form.setFieldsValue({
        rem: true,
        uid: getItem("uid"),
        pwd: getItem("pwd")
      })
    }
  }
  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="loginFrom">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('uid', {
                rules: [{ required: true, message: '请输入用户名!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="请输入用户名"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('pwd', {
                rules: [
                  { required: true, message: '请输入密码!' },
                  { min: 6, message: '必须是大于6位' },
                  { max: 18, message: '必须是小于10位' },
                  { pattern: /^[0-9a-zA-Z_]+$/, message: '只能输入数字、字母、下划线' }
                ],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="请输入密码"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('rem', {
                valuePropName: 'checked',
                initialValue: false,
              })(<Checkbox>记住密码</Checkbox>)}
              <a className="login-form-forgot" href="">
                忘记密码
          </a>

            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
          </Button>
              <a className="register" href="">注册</a>
            </Form.Item>
          </Form>
        </div>

      </div>
    )
  }
}

export default Login