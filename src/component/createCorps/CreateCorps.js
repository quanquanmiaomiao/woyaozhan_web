/**
 * Created by Caowenjuan on 17/3/22.
 */

import React,{
  Component,
  PropTypes,
} from 'react';
import {Button,Modal,Input,Icon} from 'antd';
import styles from './corps.css';


class CreateCorps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.renderChildren = this.renderChildren.bind(this);

  }

  // Modal方法
  showModal() {
    this.setState({
      visible: true,
    });
  }

  handleOk(e) {
    this.setState({
      visible: false,
    });
  }

  handleCancel(e) {
    this.setState({
      visible: false,
    });
  }


  renderChildren() {
    return (
      <div>
        <Input size="large" placeholder="战队名称" />
        <Icon type="plus" className={styles.iconWrapper}/>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Button style={{width: 100}} onClick={this.showModal} >创建战队</Button>
        <Modal
          title="创建战队"
          visible={this.state.visible}
          closable={false}
          onOk={this.handleOk}
          width={320}
          onCancel={this.handleCancel}
        >
          {this.renderChildren()}
        </Modal>
      </div>

    );
  }
}

CreateCorps.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
export default CreateCorps;