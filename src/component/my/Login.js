/**
 * Created by Caowenjuan on 16/12/27.
 */
import React,{
  Component,
} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        //TODO post登录接口
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" >
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{required: true, message: '请输入邮箱或者昵称'}],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="邮箱|昵称" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{required: true, message: '请输入密码!'}],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary" htmlType="submit" className="login-form-button" >
            登入
          </Button>
        </FormItem>
        <FormItem>
          <a className="login-form-forgot" >忘记密码</a>
          <p>还没有战斗账号?<a className="login-form-forgot" >点我注册</a></p>
        </FormItem>
        <FormItem>
          <Button
            type="primary" htmlType="submit" className="login-form-button" >
            快捷登录
          </Button>
        </FormItem>
      </Form>
    );
  }
}
const WrappedLoginForm = Form.create()(LoginForm);
export default WrappedLoginForm;