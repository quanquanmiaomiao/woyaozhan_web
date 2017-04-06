/**
 * Created by Caowenjuan on 17/3/22.
 */
import CorpsList from './CorpsList';
import { connect } from 'react-redux';
import {
  getCorpsList,
  getCorpsInfo,
  joinCorps,
} from '../../reducers/corps/CorpsController';


const mapStateToProps = (state:Object):Object => {
  const item = {
    id: 1,
    teamName: '地表最强',
    leaderId: 1,
    createTime: '2017-04-09',
    regionId: 1,
    imageUrl: 'https://zos.alipayobjects.com/rmsportal/PDiTkHViQNVHddN.png',
  }
  const {corpsList,total} = state.corps;
  const dispatch = state.dispatch;
  return {
    data: [item,item],
    total,
    getCorpsList: (params) => getCorpsList(params, dispatch),
    getCorpsInfo: (params) => getCorpsInfo(params, dispatch),
    joinCorps: (params) => joinCorps(params, dispatch),
  }
};

export default connect(mapStateToProps)(CorpsList);