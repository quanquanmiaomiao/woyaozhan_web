/**
 * Created by Caowenjuan on 16/12/27.
 */
import React,{
  Component,
} from 'react';
import styles from './login.css';
import { List, InputItem,Icon,Button,Flex } from '../../../node_modules/antd-mobile/lib/index.web';
import { createForm } from 'rc-form';

const Login = createForm()(React.createClass({
  render() {
    const { getFieldProps,getFieldError } = this.props.form;
    return (
      < div className={styles.div}>
        <form>
          <List>
            <InputItem
              {...getFieldProps('user', {
                rules: [
                  {required: true, message: '请输入昵称或邮箱'},
                ],
              })}
              type="user"
              error={!!getFieldError('user')}
              placeholder="昵称/邮箱"
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
              error={!!getFieldError('password')}
              placeholder="密码"
            >
              <Icon type="lock" />
            </InputItem>
          </List>
        </form>
        <Flex className={styles.flex} >
          <Button
            className={styles.button}
            inline >登录</Button>
        </Flex>
        <a className={styles.forgot}>忘记密码?</a>
        <div className={styles.register}>还没有战斗上号?<a>点我注册</a></div>
          <img
            className={styles.img}
            src="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"/>
      </div>);
  }
}));


export default Login;