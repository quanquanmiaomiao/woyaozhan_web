/**
 * Created by Caowenjuan on 16/12/1.
 */
import React,{
  Component,
} from 'react';
import { Card, Tabs, Button } from '../../node_modules/antd-mobile/lib/index.web';
import Login from '../component/login/Login';
import Summary from '../component/summary/Summary';
import Register from '../component/register/Register';
import MatchList from '../component/match/matchList';
import CorpsList from '../component/corps/corpsList';

const TabPane = Tabs.TabPane;

const styles = {
  div: {
    marginTop: 50,
    marginLeft: 80,
    marginRight: 80,
  },
  headerDiv: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    display: 'flex',
    marginBottom: 8,
  },
  rowDiv: {
    flexDirection: 'row',
    flex: 1,
    display: 'flex',
    height: 350,
  },
  cardDiv: {
    flex: 2,
    color: 'pink',
    backgroundColor: '#4169E1',
  },
  loginDiv: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: '#4169E1',
    height: 350
  },
  matchDiv: {
    marginTop: 10,
    color: '#B8B8B8',
  },
  corpsDiv: {
    marginTop: 10,
    color: '#B8B8B8',
  },
}


class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.div} >
        <div style={styles.headerDiv} >
          <div>LOGO</div>
          <div style={{ flexDirection:'row',display:'flex'}} >
            <Button style={{width: 100}} >创建战队</Button>
            <Button style={{width: 100,marginRight: 10,marginLeft: 10}} >创建比赛</Button>
          </div>
        </div>

        <div style={styles.rowDiv} >
          <Summary />
          <div style={styles.loginDiv} >
            <Tabs defaultActiveKey="1" >
              <TabPane tab="登录" key="1" >
                <Login />
              </TabPane>
              <TabPane tab="注册" key="2" >
                <Register />
              </TabPane>
            </Tabs>
          </div>
        </div>

        <div style={styles.matchDiv} >
          <h1>比赛列表</h1>
          <MatchList />
        </div>

        <div style={styles.corpsDiv} >
          <h1>战队列表</h1>
          <CorpsList />
        </div>
      </div>
    );
  }
}
export default HomePage;
