/**
 * Created by Caowenjuan on 17/3/22.
 */
import React,{
  Component,
  PropTypes,
} from 'react';
import {Button,Modal} from 'antd';


class CreateMatch extends Component {
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
        <Button style={{width: 100,marginLeft: 10,marginRight: 10}} onClick={this.showModal} >创建比赛</Button>
        <Modal title="创建比赛" visible={this.state.visible}
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

CreateMatch.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
export default CreateMatch;