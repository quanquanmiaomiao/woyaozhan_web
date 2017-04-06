/**
 * Created by Caowenjuan on 17/3/22.
 */
import React,{
  PropTypes,
  Component,
} from 'react';
import { Pagination,Row, Col,Modal } from 'antd';
import styles from './match.css';


class MatchList extends Component {
  constructor() {
    super();
    this.showModal = this.showModal.bind(this);


  }

  showModal(item) {
    Modal.info({
      title: 'XXX战队',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {
      },
      maskClosable: true,
    });
  }

  render() {
    const {data} = this.props;
    return (
      <div className={styles.divBack} >
        <h1>比赛列表</h1>
        <Row>
          {data.map((col, index) => {
            return (
              <Col
                key={index.toString()}
                span={24 / 4}
                onClick={() => this.showModal(col)}
              >
                <div className={styles.item} >{index}</div>
              </Col>
            );
          })}
        </Row>
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

MatchList.propTypes = {
  data: PropTypes.array,
};
MatchList.defaultProps = {
  data: [],
};

export default MatchList;