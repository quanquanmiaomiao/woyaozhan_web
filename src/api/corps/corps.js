/**
 * Created by Caowenjuan on 17/4/6.
 */
import {postFetch} from '../httpHelper';
import {tootUrl} from '../config';


// 获取战队列表
export function getCorpsList(params:{}) {
  return postFetch(`${tootUrl}team/team-list`, params);
}

// 获取战队详情
export function getCorpsInfo(params:{}) {
  return postFetch(`${tootUrl}team/team-info`, params);

}

// 创建战队
export function createCorps(params:{}) {
  return postFetch(`${tootUrl}team/add-team`, params);
}

// 加入战队
export function joinCorps(params:{}) {
  return postFetch(`${tootUrl}team/join-team`, params);

}

