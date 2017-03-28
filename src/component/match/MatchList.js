/**
 * Created by Caowenjuan on 17/3/22.
 */
import React,{
  PropTypes,
  Component,
} from 'react';
import { Row, Col } from 'antd';
import styles from './match.css';


class MatchList extends Component {
  constructor() {
    super();

  }

  render() {
    const {data} = this.props;
    return (
      <div className={styles.divBack} >
        <h1>比赛列表</h1>
        <Row>
          {data.map((col, index) => {
            return (
              <Col key={index.toString()} span={24 / 4} >
                <div className={styles.item} >{index}</div>
              </Col>
            );
          })}
        </Row>
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