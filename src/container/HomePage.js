/**
 * Created by Caowenjuan on 16/12/1.
 */
import React,{
  Component,
} from 'react';
import { Button } from 'antd';
import Summary from '../component/summary/Summary';
import MatchList from '../component/match/matchList';
import CorpsList from '../component/corps/corpsList';
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
        <Summary />
        <CorpsList />
      </div>
    );
  }
}
export default HomePage;
