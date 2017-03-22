/**
 * Created by Caowenjuan on 17/3/22.
 */
/**
 * Created by Caowenjuan on 17/3/22.
 */
import React,{
  Component,
  PropTypes,
} from 'react';
import {Button,Modal} from 'antd';


class CreateCorps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

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

  render() {
    return (
      <div>
        <Button style={{width: 100}} onClick={this.showModal} >创建战队</Button>
        <Modal title="创建战队" visible={this.state.visible}
               onOk={this.handleOk} onCancel={this.handleCancel}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>

    );
  }
}

CreateCorps.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
export default CreateCorps;