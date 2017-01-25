/**
 * Created by Caowenjuan on 16/12/29.
 */
import React,{
  Component,
  PropTypes,
} from 'react';
import styles from './corps.css';
import { List, Card,Flex,Button} from '../../../node_modules/antd-mobile/lib/index.web';
const Item = List.Item;

class CorpsItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;
    return (
      <div className={styles.div} >
        <div className={styles.divImg} >
          <img alt="example" src={data.img} />
          <div>
            <tr>{data.name}</tr>
            <tr>{`队长:${data.captain}`}</tr>
            <tr>{`胜率:${data.win}  排名:${data.rank}`}</tr>
          </div>
        </div>
        <div >
          <Button style={{marginRight:5}} >加入战队</Button>
          <Button>我要战</Button>
        </div>

      </div>
    );
  }
}

CorpsItem.propTypes = {
  data: PropTypes.object,
};

export default CorpsItem;