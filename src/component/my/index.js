/**
 * Created by Caowenjuan on 17/3/22.
 */
import React,{
  Component,
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import My from './My';
import WrappedRegisterForm from './Register';
import WrappedLoginForm from './Login';
import {
  login,
  register,
} from '../../reducers/auth/AuthController';
import styles from './index.css';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;


class AboutMe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {userInfo,login,register} = this.props;
    if (userInfo) {
      return (
        <div className={styles.tab} >
          <My />
        </div>
      );
    }
    return (
      <div className={styles.tab} >
        <Tabs defaultActiveKey="1" >
          <TabPane tab="登入" key="1" >
            <WrappedLoginForm
              onLogin={login}
            /></TabPane>
          <TabPane tab="注册" key="2" >
            <WrappedRegisterForm
              onRegister={register}
            /></TabPane>
        </Tabs>
      </div>
    );
  }
}

AboutMe.propTypes = {
  userInfo: PropTypes.object,
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state:Object):Object => {
  const {userInfo} = state.auth;
  const dispatch = state.dispatch;
  return {
    userInfo,
    login: (params) => login(params, dispatch),
    register: (params) => register(params, dispatch),

  }
};


export default connect(mapStateToProps)(AboutMe);
