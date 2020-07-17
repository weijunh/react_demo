import React, { Component } from 'react'
import './Login.less'
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class Login extends Component {
  onFinish = values => {
    console.log('Received values of form: ', values);
  };
  onFinishFailed = errorInfo => {
    message.error('请填写完成表单');
  };
  render () {
    return (
      <div className="login">
        <div className="loginFrom">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: false,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, whitespace: true, message: '请输入用户名' },
                { min: 5, message: '用户名必须大于5位' },
                { max: 12, message: '用户名必须小于12位' },
                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名只能包含英文、数字、下划线' }
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, whitespace: true, message: '请输入密码' },
                { min: 6, message: '用户名必须大于5位' },
                { max: 10, message: '用户名必须小于12位' },
                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名只能包含英文、数字、下划线' }
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住密码</Checkbox>
              </Form.Item>

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