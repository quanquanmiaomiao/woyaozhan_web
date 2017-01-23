/**
 * Created by Caowenjuan on 16/12/28.
 */
import React,{
  Component,
  PropTypes,
} from 'react';
import styles from './match.css';

class MatchItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;
    return (
      <div className={styles.div} >
        <div className={styles.divRow} >
          <div className={styles.divImg} >
            <img alt="example" src={data.imgOne} />
            <td>{data.nameOne}</td>
          </div>
          <h1>VS</h1>
          <div className={styles.divImg} >
            <img alt="example" width="60%" src={data.imgTwo} />
            <td>{data.nameTwo}</td>
          </div>
        </div>
        <h3>{data.date}</h3>
      </div>
    );
  }
}

MatchItem.propTypes = {
  data: PropTypes.object,
};

export default MatchItem;