/**
 * Created by Caowenjuan on 17/4/6.
 */
import { Record,List } from 'immutable';


export const MatchItem = Record({

});


const InitialState = Record({
  isLoading: false,
  total: 0, // 总数
  matchList: List(), //CorpsItem

});

export default InitialState;