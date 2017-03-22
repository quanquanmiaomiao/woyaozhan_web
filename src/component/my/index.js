/**
 * Created by Caowenjuan on 17/3/22.
 */
import React,{
  Component,
} from 'react';
import LoginForm from './Login';
import WrappedRegisterForm from './Register';
import WrappedLoginForm from './Login';
import styles from './index.css';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;


class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.callback = this.callback.bind(this);
  }

  callback(key) {

  }

  render() {
    return (
      <div className={styles.tab} >
        <Tabs defaultActiveKey="1" onChange={this.callback} >
          <TabPane tab="登入" key="1" ><WrappedLoginForm/></TabPane>
          <TabPane tab="注册" key="2" ><WrappedRegisterForm /></TabPane>
        </Tabs>
      </div>

    );
  }
}


export default AboutMe;