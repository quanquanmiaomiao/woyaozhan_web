/**
 * Created by Caowenjuan on 17/3/22.
 */
import React,{
  Component,
  PropTypes,
} from 'react';
import {Button} from 'antd';
import CreateCorps from '../createCorps'
import CreateMatch from '../createMatch'
import styles from './tabbar.css';
const imgUrl = "https://zos.alipayobjects.com/rmsportal/PDiTkHViQNVHddN.png";


class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

  }

  render() {
    return (
      <div className={styles.headerDiv} >
        <img
          className={styles.img}
          src={imgUrl} ></img>
        <div style={{ flexDirection:'row',display:'flex',alignItems:'center'}} >
          <CreateCorps />
          <CreateMatch />
        </div>
      </div>
    );
  }
}

TopBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
export default TopBar;