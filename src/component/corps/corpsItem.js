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
            <List>
              <Item>{data.name}</Item>
              <Item>{`队长:${data.captain}`}</Item>
              <Item>{`胜率:${data.win}  排名:${data.rank}`}</Item>
            </List>
          </div>
        <Flex className={styles.flex}>
          <Flex.Item><Button style={{marginRight: 1}}>加入战队</Button></Flex.Item>
          <Flex.Item><Button style={{marginLeft: 1}}>我要战</Button></Flex.Item>
        </Flex>
      </div>
    );
  }
}

CorpsItem.propTypes = {
  data: PropTypes.object,
};

export default CorpsItem;