/**
 * Created by Caowenjuan on 17/3/22.
 */
import React,{
  PropTypes,
  Component,
} from 'react';
import { Row, Col, Slider } from 'antd';
import styles from './match.css';


class MatchList extends Component {
  constructor() {
    super();

  }

  //render() {
  //  //TODO 二维数组处理=>Grid
  //  const cols = [];
  //  const rows = [1, 2]
  //  const colCount = 4; // 列数
  //  let colCode = '';
  //  for (let i = 0; i < colCount; i++) {
  //    cols.push(
  //      <Col key={i.toString()} span={24 / colCount} >
  //        <div className={styles.item} >Column</div>
  //      </Col>
  //    );
  //    colCode += `  <Col span={${24 / colCount}} />\n`;
  //  }
  //  return (
  //    <div className={styles.divBack} >
  //      <h1>比赛列表</h1>
  //      {rows.map((item, index) => {
  //        return (
  //          <Row
  //            key={index}
  //            gutter={16} >{cols}</Row>)
  //      })}
  //    </div>);
  //}


  render() {
    const {data} = this.props;
    return (
      <div className={styles.divBack} >
        <h1>比赛列表</h1>
        {data.map((row, index) => {
          return (
            <Row
              key={index.toString()}
            >
              {row.rowItem.map((col, i) => {
                return (
                  <Col key={i.toString()} span={24 / 4} >
                    <div className={styles.item} >Column</div>
                  </Col>
                );
              })}
            </Row>
          )
        })}
      </div>
    );
  }
}

MatchList.propTypes = {
  data: PropTypes.array,
};
MatchList.defaultProps = {
  data: [],
};

export default MatchList;