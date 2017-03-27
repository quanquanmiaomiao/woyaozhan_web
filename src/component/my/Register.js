/**
 * Created by Caowenjuan on 17/3/22.
 */
import React,{
  Component,
} from 'react';
import { Form, Input, Icon,Button } from 'antd';
const FormItem = Form.Item;
class RegisterForm extends Component {

  constructor(props) {
    super(props);
    this.checkConfirm = this.checkConfirm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        //TODO post注册接口
      }
    });
  }

  checkConfirm(rule, value, callback) {
    const form = this.props.form;
    const password = form.getFieldValue('password');
    const confirm = form.getFieldValue('confirm');
    if (password === undefined || confirm === undefined) {
      return;
    }
    if (confirm !== password) {
      callback('两次密码输入不一致!');
    } else {
      callback();
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} >
        <FormItem>
          {getFieldDecorator('email', {
            rules: [
              {type: 'email', message: '输入的不是合法邮箱!'},
              {required: true, message: '请输入你的邮箱!'}],
          })(
            <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} placeholder="邮箱" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [
              {required: true, message: '请输入密码!'}]
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('confirm', {
            rules: [
              {required: true, message: '请确认密码!'},
              {validator: this.checkConfirm}],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="确认密码" />
          )}
        </FormItem>
        <FormItem>
          <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="昵称" />
        </FormItem>
        <FormItem>
          <Button
            type="primary" htmlType="submit" >
            注册</Button>
        </FormItem>
      </Form>
    );
  }
}
const WrappedRegisterForm = Form.create()(RegisterForm);
export default WrappedRegisterForm;