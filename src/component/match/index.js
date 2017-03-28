/**
 * Created by Caowenjuan on 17/3/22.
 */
import MatchList from './MatchList';
import { connect } from 'react-redux';


const data = Array.from(new Array(8)).map((_val, index) => ({
  value: index
}));


const mapStateToProps = (state:Object):Object => {

  return {
    data: data,
    dispatch: state.dispatch,
  }
};

export default connect(mapStateToProps)(MatchList);