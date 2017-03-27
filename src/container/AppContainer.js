/**
 * Created by Caowenjuan on 17/3/22.
 */
import React, {
  PropTypes,
  Component,
} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import TopBar from '../component/topBar';

class AppContainer extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div>
        <TopBar/>
        {this.props.children}
      </div>
    )
  }
}

AppContainer.propTypes = {
  children: PropTypes.node,
};
AppContainer.defaultProps = {};

export default AppContainer