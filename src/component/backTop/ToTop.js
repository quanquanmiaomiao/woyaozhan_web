/**
 * Created by Caowenjuan on 17/3/28.
 */
import React,{
  Component,
} from 'react';
import { BackTop } from 'antd';

class ToTop extends Component {
  render() {
    return (
      <BackTop
        visibilityHeight={200}
      >
      </BackTop>
    );
  }
}

export default ToTop;