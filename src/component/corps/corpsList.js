/**
 * Created by Caowenjuan on 17/3/22.
 */
import React,{
  Component,
  PropTypes,
} from 'react';
import styles from "./corps.css";
import { Pagination,Row, Col,Modal } from 'antd';

class CorpsList extends Component {

  constructor(props) {
    super(props);
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
      <div
        className={styles.wrapper}
      >
        <h1>战队列表</h1>
        <Row>
          {data.map((item, index) => {
            return (
              <Col
                span={24 / 6}
                key={index.toString()}
                onClick={() => this.showModal(item)}
              >
                <div
                  className={styles.item}
                >{index}</div>
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

CorpsList.propTypes = {
  data: PropTypes.array,
};
CorpsList.defaultProps = {
  data: [],
};
export default CorpsList;