/**
 * Created by Caowenjuan on 17/3/22.
 */
import React,{
  Component,
  PropTypes,
} from 'react';
import { Form, Input, Icon,Button } from 'antd';
const FormItem = Form.Item;
class RegisterForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.checkConfirm = this.checkConfirm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = this.props.form;
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const {email,password} = values;
        this.props.onRegister({email, password});
      }
    });
  }

  checkPassword(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码不一致,请重新输入!');
    } else {
      callback();
    }
  }

  checkConfirm(rule, value, callback) {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], {force: true});
    }
    callback();
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" >
        <FormItem>
          {getFieldDecorator('email', {
            rules: [
              {type: 'email', message: '请输入合法邮箱!',},
              {required: true, message: '请输入邮箱!'}],
          })(
            <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} placeholder="邮箱" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{required: true, message: '请输入密码!'},
              {
                validator: this.checkConfirm,
              }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('confirm', {
            rules: [
              {required: true, message: '请确认密码!'},
              {
                validator: this.checkPassword,
              }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="确认密码"
                   onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary" htmlType="submit" className="login-form-button" >
            注册
          </Button>
        </FormItem>
      </Form>
    );
  }


}
const WrappedRegisterForm = Form.create()(RegisterForm);
WrappedRegisterForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
};
export default WrappedRegisterForm;