/**
 * Created by Caowenjuan on 17/4/6.
 */
import { Record,List } from 'immutable';


export const CorpsItem = Record({
  id: undefined,
  teamName: undefined, // 队名
  leaderId: undefined, // 队长Id
  createTime: undefined, // 创建时间
  regionId: undefined, // 大区Id
  imageUrl: undefined, // 战队头像
});


const InitialState = Record({
  isLoading: false,
  total: 0, // 总数
  corpsList: List(), //CorpsItem

});

export default InitialState;