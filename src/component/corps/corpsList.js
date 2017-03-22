/**
 * Created by Caowenjuan on 17/3/22.
 */
import React,{
  Component,
  PropTypes,
} from 'react';
import styles from "./corps.css";
import { Card,Pagination,Button,BackTop } from 'antd';

class CorpsList extends Component {

  constructor(props) {
    super(props);
    this.renderChildren = this.renderChildren.bind(this);
  }

  renderChildren() {
    return (
      <div style={{flexDirection:'row',display:'flex',justifyContent:'center'}} >
        {this.props.data.map((item, index) => {
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
          total={this.props.data.length} />
      </div>
    );
  }
}

CorpsList.propTypes = {
  data: PropTypes.array,
};
CorpsList.defaultProps = {
  data: [],
};
export default CorpsList;