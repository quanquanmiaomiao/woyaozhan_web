///**
// * Created by Caowenjuan on 16/12/27.
// */


import React,{
  Component,
} from 'react';
import { List, InputItem,Icon, Button,Flex } from '../../../node_modules/antd-mobile/lib/index.web';
import { createForm } from 'rc-form';
import styles from './register.css'

const Register = createForm()(React.createClass({

  confirmPassword(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback(new Error('两次密码不一样'));
    } else {
      callback();
    }
  },

  render() {
    const { getFieldProps,getFieldError} = this.props.form;
    return (
      <div>
        <form>
          <List>
            <InputItem
              {...getFieldProps('email', {
                rules: [{
                  type: 'email', message: '请输入合法邮箱',
                }, {
                  required: true, message: '请输入邮箱',
                }],
              })}
              type="email"
              placeholder="邮箱"
              error={!!getFieldError('email')}
            >
              <Icon type="user" />
            </InputItem>
            <InputItem
              {...getFieldProps('password', {
                rules: [
                  {required: true, message: '请输入密码'},

                ],
              })}
              type="password"
              placeholder="密码"
              error={!!getFieldError('password')}
            >
              <Icon type="lock" />
            </InputItem>
            <InputItem
              {...getFieldProps('confirm', {
                rules: [
                  {required: true, message: '请确认密码'},
                  {validator: this.confirmPassword},
                ],
              })}
              type="password"
              placeholder="确认密码"
              error={!!getFieldError('confirm')}
            >
              <Icon type="lock" />
            </InputItem>
            <InputItem
              type="user"
              placeholder="昵称"
            >
              <Icon type="heart-o" />
            </InputItem>
          </List>
        </form>
          <Flex>
            <Button
              className={styles.button}
              inline >注册</Button>
          </Flex>
      </div>
    );
  }
}));


export default Register;
