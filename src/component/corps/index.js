/**
 * Created by Caowenjuan on 17/3/22.
 */
import CorpsList from './CorpsList';
import { connect } from 'react-redux';

const data = Array.from(new Array(6)).map((_val, index) => ({
  value: index,

}));

// TODO 决定pageSize with/itemWidth 向上取整

const mapStateToProps = (state:Object):Object => {
  return {
    data: data,
    dispatch: state.dispatch,
  }
};

export default connect(mapStateToProps)(CorpsList);