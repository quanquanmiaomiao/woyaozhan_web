/**
 * Created by Caowenjuan on 17/3/22.
 */
import CreateCorps from './CreateCorps';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});


export default connect(mapStateToProps)(CreateCorps);