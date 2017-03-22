/**
 * Created by Caowenjuan on 17/3/22.
 */
/**
 * Created by Caowenjuan on 17/3/22.
 */
import CreateMatch from './CreateMatch';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});


export default connect(mapStateToProps)(CreateMatch);