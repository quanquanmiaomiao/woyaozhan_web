/**
 * Created by Caowenjuan on 16/12/29.
 */
/**
 * Created by Caowenjuan on 16/12/28.
 */
import React,{
  Component,
  PropTypes,
} from 'react';
import styles from "./corps.css";
import { Card,Pagination,Button,BackTop } from 'antd';

const data = Array.from(new Array(6)).map((_val, i) => ({
  imgUrl: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png',
  name: `地表最强${i}`, // 战队名称
  win: '80%', // 胜率
  rank: `${i}`, // 排名
  show: `${i}0`, // 场次
  captain: '我放的一个防御塔' // 队长
}));

class CorpsList extends Component {

  constructor(props) {
    super(props);
    this.renderChildren = this.renderChildren.bind(this);
  }

  renderChildren() {
    return (
      <div style={{flexDirection:'row',display:'flex',justifyContent:'center'}} >
        {data.map((item, index) => {
          const {imgUrl,name,win,rank,show,captain} = item;
          return (
            <Card
              key={index}
              style={{borderRadius: 5,marginRight: 5,marginLeft:5}}
              bodyStyle={{backgroundColor:'white'}}
            >
              <div
                style={{flexDirection:'row',display:'flex'}} >
                <div>
                  <h1>{name}</h1>
                  <p>{captain}</p>
                </div>
                <img
                  style={{width:50,height:50,borderRadius:50}}
                  src={imgUrl} ></img>
              </div>
              <div style={{flexDirection:'row',display:'flex'}} >
                <p>场次</p>
                <p>胜率</p>
                <p>排名</p>
              </div>
              <div style={{flexDirection:'row',display:'flex'}} >
                <p>{show}</p>
                <p>{win}</p>
                <p>{rank}</p>
              </div>
              <div>
                <Button>加入</Button>
                <Button>挑战</Button>
              </div>
            </Card>)
        })}
      </div>

    )
  }

  render() {
    return (
      <div
        className={styles.wrapper}
      >
        <h1>战队列表</h1>
        {this.renderChildren()}
          <Pagination
            className={styles.pagination}
            showQuickJumper
            defaultCurrent={1}
            pageSize={6}
            total={data.length} />
      </div>
    );
  }
}

export default CorpsList;