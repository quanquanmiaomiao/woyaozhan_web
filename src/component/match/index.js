/**
 * Created by Caowenjuan on 17/3/22.
 */
import MatchList from './MatchList';
import { connect } from 'react-redux';

const cols = Array.from(new Array(4)).map((_val, index) => ({
  value: index,
}));
const data = Array.from(new Array(2)).map((_val, i) => ({
  rowItem: cols
}));


const mapStateToProps = (state:Object):Object => {
  return {
    data: data,
    dispatch: state.dispatch,
  }
};

export default connect(mapStateToProps)(MatchList);