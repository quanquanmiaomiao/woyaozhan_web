/**
 * Created by Caowenjuan on 17/3/22.
 */
import MatchList from './MatchList';
import { connect } from 'react-redux';

const data = Array.from(new Array(6)).map((_val, i) => ({
  imgUrl: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png',
  name: `地表最强${i}`, // 战队名称
  win: '80%', // 胜率
  rank: `${i}`, // 排名
  show: `${i}0`, // 场次
  captain: '我放的一个防御塔' // 队长
}));

const mapStateToProps = (state:Object):Object => {
  return {
    data: data,
    dispatch: state.dispatch,
  }
};

export default connect(mapStateToProps)(MatchList);