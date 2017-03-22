/**
 * Created by Caowenjuan on 17/3/22.
 */
import React,{
  Component,
  PropTypes,
} from 'react';
import {Button} from 'antd';
import commonStyle from '../../util/commonStyle';
const imgUrl = "https://zos.alipayobjects.com/rmsportal/PDiTkHViQNVHddN.png";
const styles = {
  headerDiv: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    display: 'flex',
    marginBottom: 8,
    paddingTop: 5,
    paddingBottom: 5,
    height: commonStyle.TOP_BAR_HEIGHT,
    backgroundColor: '#364d79',
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginLeft:8,
  }
}


class TopBar extends Component {


  render() {
    return (
      <div style={styles.headerDiv} >
        <img
          style={styles.img}
          src={imgUrl} ></img>
        <div style={{ flexDirection:'row',display:'flex'}} >
          <Button style={{width: 100}} >创建战队</Button>
          <Button style={{width: 100,marginRight: 10,marginLeft: 10}} >创建比赛</Button>
        </div>
      </div>
    );
  }
}

TopBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
export default TopBar;