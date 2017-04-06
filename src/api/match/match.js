/**
 * Created by Caowenjuan on 17/4/6.
 */
import {postFetch} from '../httpHelper';
import {tootUrl} from '../config';


// 获取比赛列表
export function getMatchList(params:{}) {
  return postFetch(`${tootUrl}game/game-list`, params);
}

// 获取比赛详情
export function getMatchInfo(params:{}) {
  return postFetch(`${tootUrl}game/game-list`, params);

}

// 创建比赛
export function createMatch(params:{}) {
  return postFetch(`${tootUrl}game/game-add`, params);
}

// 加入比赛
export function joinMatch(params:{}) {
  return postFetch(`${tootUrl}game/game-invite`, params);

}
